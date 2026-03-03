import { projects } from "../data/info.js";

const projectsContainer = document.getElementById("container-project");

projects.forEach((item) => {
  let newDiv = document.createElement("div");
  newDiv.classList.add("swiper-slide");
  newDiv.innerHTML += `
    <div class="card">
        <div class="card-body">
            <h3 class="project-title">${item.name}</h3>
            <hr>
            <p class="project-text">${item.description}</p>
            <a href="${item.repositore}" class="repositore text-info" target="_blank">Repositorio</a>
            <hr>
            <span class="technologies fw-bold">Tecnologias: ${item.tecnologies}</span>
        </div>
    </div>
    `;
  projectsContainer.appendChild(newDiv);
});

function fixedHeader() {
  const header = document.querySelector(".header");

  header.classList.toggle("fixed", window.scrollY > 0);
}

window.addEventListener("scroll", fixedHeader);

const btnMobile = document.getElementById("btn-mobile");

function toggleMenu(e) {
  e.preventDefault();
  const nav = document.querySelector("nav");
  const links = document.querySelectorAll("a");
  if (e.type === "touchstart") nav.classList.toggle("active");

  links.forEach((item, i) => {
    links[i].addEventListener("click", () => {
      nav.classList.remove("active");
    });
  });
}

btnMobile.addEventListener("click", toggleMenu);

btnMobile.addEventListener("touchstart", toggleMenu);

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,

  pagination: {
    effect: "coverflow",
    grabCursor: true,
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickableClass: ".swiper-pagination-bullet",
  },

  slidesPerView: 1,
  spaceBetween: 10,

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },

    480: {
      slidesPerView: 1,
      spaceBetween: 30,
    },

    640: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  },
});