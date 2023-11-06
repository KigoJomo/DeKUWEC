const body = document.querySelector("body");
const container = document.querySelector(".container");
const nav_links = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");

const elementIsVisibleInViewport = (el) => {
  const { top, bottom } = el.getBoundingClientRect();
  return top >= 0 && bottom <= window.innerHeight;
};

var sectionIndex = 0;

function HandleScroll() {
  sections.forEach((section, index) => {
    if (elementIsVisibleInViewport(section)) {
      sectionIndex = index;
    }
  });

  // Update the background position based on the section index
  // switch (sectionIndex) {
  //   case 0:
  //     body.style.backgroundPosition = "top left";
  //     break;
  //   case 1:
  //     body.style.backgroundPosition = "top right";
  //     break;
  //   case 2:
  //     body.style.backgroundPosition = "bottom right";
  //     break;
  //   case 3:
  //     body.style.backgroundPosition = "bottom left";
  //     break;
  //   case 4:
  //     body.style.backgroundPosition = "center";
  //     break;
  //   case 5:
  //     body.style.backgroundSize = "100vw";
  //     break;
  //   default:
  //     body.style.backgroundPosition = "center";
  //     body.style.backgroundSize = "cover";
  // }

  // Update the active nav link
  nav_links.forEach((link) => link.classList.remove("active"));
  nav_links[sectionIndex].classList.add("active");

  // Request a new animation frame for smoother updates
  requestAnimationFrame(HandleScroll);
}

HandleScroll();
window.addEventListener("scroll", HandleScroll);
