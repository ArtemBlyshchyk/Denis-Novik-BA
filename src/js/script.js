// ====METHOD forEach for NodeList=====
const links = document.querySelectorAll(".section-link");

links.forEach((link) => {
  link.addEventListener("click", () => {
    links.forEach((item) => {
      item.classList.remove("active");
    });
    link.classList.add("active");
  });
});

// ==================METHOD ***for***===================
// const links = document.querySelectorAll(".section-link");

// for (let i = 0; i < links.length; i++) {
//   links[i].addEventListener("click", () => {
//     for (let j = 0; j < links.length; j++) {
//       links[j].classList.remove("active");
//     }
//     links[i].classList.add("active");
//   });
// }

// ==================METHOD ***for of***===================
// const links = document.querySelectorAll(".section-link");

// for (let link of links) {
//   link.addEventListener("click", () => {
//     for (let item of links) {
//       item.classList.remove("active");
//     }

//     link.classList.add("active");
//   });
// }
