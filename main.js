let d = new Date();

let currentbg = Math.floor(Math.random() * 5 + 1);
function changebackgrund() {
  for (let i = 1; i < 6; i++)
    document.querySelector('.App-header').classList.remove('spatter' + i)
  document.querySelector('.App-header').classList.add('spatter' + currentbg++)

  if (currentbg > 5) currentbg = 1;
}

function scroll() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.querySelector(".scrollbar p").style.top = scrolled - 10 + "%";

  document.querySelectorAll(".transition:nth-child(even)").forEach((e) => { e.style.left = -135 + scrolled + "%"; })
  document.querySelectorAll(".transition:nth-child(odd)").forEach((e) => { e.style.right = -135 + scrolled + "%"; })
}

function typeName() {
  const h1 = document.querySelector('.App-header h1');

  const name = 'Lukas Okkenhaug';

  h1.innerHTML = '';
  function nameAppear() {
    for (let i = 0; i < name.length; i++)
      setTimeout(() => { h1.innerHTML += name[i, i]; }, i * 125);

  } nameAppear();
}

window.onload = () => {
  window.onscroll = function() { scroll() };
  document.querySelector('.load').remove();
  document.querySelector("nav a").addEventListener("click", changebackgrund);
  document.querySelector("#age").innerHTML = `I am ${(d.getFullYear() - (d.getMonth() <= 7 ? 2007 : 2006))} Years old`;
  
  changebackgrund();
  typeName();

  document.querySelectorAll("#Work .window section").forEach((e) => {
    e.lastElementChild.style.height = "fit-content !important";
    // e.lastElementChild.style.height = e.lastElementChild.offsetHeight + "px";
  })

  document.querySelectorAll("#Work .window section").forEach((e) => {
    e.addEventListener("click", () => {
      e.lastElementChild.style.height = "fit-content";
      e.lastElementChild.style.height = e.lastElementChild.offsetHeight + "px";
    })
    document.querySelectorAll("#Work .window section").forEach((x) => {
      // if (x.innerHTML != e.innerHTML)
        // e.classList.remove("open")
    })
  })

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
      document.querySelector("." + e.getAttribute("alt")).style.display = "block";
    })
  });
}