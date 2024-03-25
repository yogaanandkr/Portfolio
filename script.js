window.addEventListener("scroll", function () {
  const nava = this.document.querySelector(".navbar");
  nava.classList.toggle("sticky", window.scrollY > 10);
  const scroll = this.document.querySelector(".scroll-up-btn");
  scroll.classList.toggle("scroll-none", window.scrollY > 10);
});

window.addEventListener("mouseover", function () {
  const card = this.document.querySelectorAll(".card");
  card.classList.toggle("shadow");
});

// typing animation script
var typed = new Typed(".typing", {
  strings: ["Student.", "Developer."],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});
var typeds = new Typed(".typing-2", {
  strings: ["Student.", "Developer."],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

let carousel = [
  {
    name: "Gaming Charecter Interface",
    img: "Screenshot (240).png",
    link: "https://yogaanandkr.github.io/valorant/",
  },
  {
    name: "Meusium of candy",
    img: "Screenshot (239).png",
    link: "https://yogaanandkr.github.io/Museum_of_candy/",
  },
  {
    name: "Shopping app page login",
    img: "Screenshot (209).png",
    link: "https://yogaanandkr.github.io/bootstrap-1/",
  },
  {
    name: "Shaadi.com replica",
    img: "shaadi.png",
    link: "https://yogaanandkr.github.io/Shaadi_replica/",
  },
  {
    name: "Manes Winchester",
    img: "manes.png",
    link: "https://yogaanandkr.github.io/manes_winchester_replica/",
  },
  {
    name: "Calculator",
    img: "Screenshot (241).png",
    link: "https://yogaanandkr.github.io/calculator_js/",
  },
  {
    name: "Query page",
    img: "Screenshot (207).png",
    link: "https://yogaanandkr.github.io/questions/",
  },
  {
    name: "Menu",
    img: "Screenshot (208).png",
    link: "https://yogaanandkr.github.io/Menu/",
  },
  {
    name: "Score Keeper",
    img: "Screenshot (243).png",
    link: "https://yogaanandkr.github.io/scoreKeeper/",
  },
];

let carousels = document.querySelector(".carousel");
carousel.map(a => {
  carousels.innerHTML += `
                          <div class="item mb-4">
                              <div class="card">
                                <img src="${a.img}" alt="" class="card-img-top">
                                <div class="card-body">
                                  <a href=${a.link} target="new"
                                    >${a.name}</a>
                                </h3>
                                </div>
                              </div>
                          </div>
                         `;
});
