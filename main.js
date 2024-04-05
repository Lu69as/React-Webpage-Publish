let d = new Date();
const user = {
  name: 'Lukas Okkenhaug',
  desc: ' A Creative Fella from Norway',
  age: (d.getDate === 15 && d.getMonth() === 7) ? `Its my Birthday! I'm turning ${(d.getFullYear() - 2006)} Years old` 
    : `I am ${(d.getFullYear() - (d.getMonth() <= 7 ? 2007 : 2006))} Years old`
}

let currentbg = Math.floor(Math.random() * 5 + 1);
function changebackgrund() {
  for (let i = 1; i < 6; i++)
    document.querySelector('.App-header').classList.remove('spatter' + i)
  document.querySelector('.App-header').classList.add('spatter' + currentbg++)

  if (currentbg > 5)
    currentbg = 1;
}

function scroll() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.querySelector(".scrollbar p").style.top = scrolled - 10 + "%";

  document.querySelector(".App-header").style.backgroundSize = 100 + scrolled * 5 + "%"

  document.querySelectorAll(".transition:nth-child(even)").forEach((e) => {
    e.style.left = -135 + scrolled + "%";
  })
  document.querySelectorAll(".transition:nth-child(odd)").forEach((e) => {
    e.style.right = -135 + scrolled + "%";
  })
}

function typeName() {
  const h1 = document.querySelector('.App-header h1');
  const h2 = document.querySelector('.App-header h2');

  h1.innerHTML = '';
  h2.innerHTML = '';
  function nameAppear() {

  const cursor = document.createElement('span');
  cursor.classList.add('cursor');
  cursor.innerHTML = '|';

  for (let i = 0; i < user.name.length; i++) {
    setTimeout(() => {
      const name = document.createElement('span');
      name.innerHTML = user.name[i, i];
      h1.append(name);
      h1.append(cursor);
    }, i * 125);
  }
  for (let i = 0; i < user.desc.length; i++) {
    setTimeout(() => {
      const desc = document.createElement('span');
      desc.innerHTML = user.desc[i, i];
      h2.append(desc);
      h2.append(cursor);
    }, (user.name.length * 150) + (i * 75));
  }
  } nameAppear();
}

window.onload = () => {
  window.onscroll = function() {scroll()};
  document.querySelector('.load').style.display = 'none';
  document.querySelector("nav a").addEventListener("click", changebackgrund);
  document.querySelector("#age").innerHTML = user.age;
  changebackgrund();

  let sentence = document.querySelector(".App-header section .line2 p").innerHTML;
  for (let i = 0; i < 100; i++) {
      document.querySelectorAll(".App-header section .line p").forEach((e) => {e.innerHTML += sentence})
  }

  let header = Math.floor(Math.random() * document.querySelectorAll(".App-header section").length + 2);
  document.querySelector(`.App-header section:nth-child(${header})`).style.display = "block";
  if (header === 3) typeName()

  document.querySelectorAll('.icons-container img').forEach((e) => {
    e.addEventListener('click', () => {
      let desc = e.getAttribute("alt");
        if (window.innerWidth > window.innerHeight) {
          document.querySelectorAll('.desc').forEach((e) => {e.classList.remove('experienceShowDesc')})
          document.querySelector('#' + desc).classList.add('experienceShowDesc');
      
          document.addEventListener('keydown', function(e) {
          if (e.key === "Escape") {
            document.querySelector('#' + desc).classList.remove('experienceShowDesc');
          }
        })
      }
    })
  })
  document.querySelectorAll('#Experience .desc div').forEach((e) => {
    e.addEventListener('click', () => {
      e.parentElement.classList.remove("experienceShowDesc");
    })
  })

  document.querySelectorAll("#Hobbies .titles h1").forEach((e) => {
    e.addEventListener('click', () => {
      document.querySelectorAll("#Hobbies .container").forEach((x) => {x.style.display = "none"});
  
      if (e.innerHTML !== "Formula 1") document.querySelector("." + e.innerHTML).style.display = "flex";
      else document.querySelector(".Formula").style.display = "flex";
    })
  });

  document.querySelectorAll("#Hobbies .game").forEach((e) => {
    e.addEventListener('click', () => {
      document.querySelectorAll("#Hobbies .gameDesc").forEach((x) => {x.style.display = "none"});
      document.querySelector("." + e.firstChild.getAttribute("alt")).style.display = "block";
    })
  });
}