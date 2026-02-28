const cards = document.querySelectorAll(".product-card"); 
const item = document.querySelector(".new-items"); 
let counter = 0 ;
cards.forEach((i) => {
    i.addEventListener("click" , () => {
       alert("item is added to cart ")  
       counter++;
       item.innerHTML = counter;
       
    })
}) 


