
document.querySelectorAll(".accordion-effect").forEach((item) => {
  item.addEventListener("click", (e) => {
    e.target.classList.toggle("active-toggle")
  });
});

if (document.querySelector("body.template-product")) {
 let titleBig = document.querySelector(".product__info-container .product__title")
 if(titleBig.clientWidth > 300){
  titleBig.classList.add("big")
 }
} 
