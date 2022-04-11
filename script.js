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

// window.addEventListener('scroll', function(){
//     const scroll = this.document.querySelector('.scroll-up-btn')
//     nava.classList.toggle('scroll-none', window.scrollY > 10)
// })

// .projects {
//   /* margin: 100px 0 0 0 ; */
//   height: 90vh;
// }

// .projects .myprojects {
//   position: relative;
//   font-size: 40px;
//   text-align: center;
//   font-weight: 500;
//   margin-bottom: 0;
//   color: #fff;
//   font-family: "Ubuntu", sans-serif;
// }

// .projects .who {
//   color: #fff;
// }

// /* carousel projects  */
// /* .projects .carousel .card{
//     background: #222;
//     border-radius: 6px;
//     padding: 25px 35px;
// }

// .projects .carousel .card img{
//     height: 250px;
//     width: 250px;
//     object-fit: cover;
//     border-radius: 10px;
//     border: 5px solid crimson;
// } */

// .carousel {
//   margin-top: 100px;
//   height: 50%;
//   width: 50%;
// }

// .carousel img {
//   height: 500px;
//   width: 100%;
//   border-radius: 10px;
// }

// .projects .home-content {
//   margin: 50px 0;
//   color: #fff;
// }

// .projects {
//   background: #111;
// }

// .carousel-item h3 {
//   color: crimson;
//   font-weight: 600;
//   /* background-color: #111; */
//   border-radius: 10px;
// }

// .carousel-caption {
//   background-color: rgba(220, 20, 60, 0.342);
//   border-radius: 10px;
// }

// .carousel-item h3 a {
//   /* color: crimson; */
//   color: #fff;
//   font-weight: 600;
//   /* background-color: #111; */
//   border-radius: 10px;
// }

// .carousel-item h3 a:hover {
//   color: crimson;
//   text-decoration: none;
//   transition: 0.3s;
// }

// .carousel-item p {
//   color: #fff;
//   font-weight: 500;
// }

// .carousel-control-prev {
//   background-color: #111;
// }

// .carousel-control-next {
//   background-color: #111;
// }

// .carousel-item button {
//   background: crimson;
//   border: 3px solid crimson;
//   border-radius: 10px;
// }

// .carousel-item button a {
//   color: #fff;
//   font-size: 20px;
//   font-weight: 500;
// }

// @media (max-width: 800px) {
//   .carousel {
//     margin-top: 50px;
//     height: 30%;
//     width: 100%;
//   }

//   .carousel img {
//     height: 300px;
//     width: 100%;
//     border-radius: 10px;
//   }
// }

// @media (max-width: 760px) {
//   .carousel {
//     margin-top: 100px;
//   }
// }

// /* .main .all-projects a{
//     font-size: 20px;
//     color: #111;
//     font-weight: 500;
// }

// .main .all-projects a:hover{
//     color: crimson;
// }

// .main .all-projects{
//     display: grid;
//     grid-template-columns: repeat(2, 1fr);
//     padding-left: 20%;
// }

// @media (max-width: 1000px){
//     .main .all-projects{
//         display: block;
//     }
// } */
