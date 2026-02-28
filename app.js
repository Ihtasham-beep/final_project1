let imgs = document.querySelectorAll(".header-slider ul .header-img");
let nextBtn = document.querySelector(".arrow-next");
let PrevBtn = document.querySelector(".arrow-prev"); 

let slideNum = 0 ;
const slide = () => {
 for(let i = 0; i < imgs.length ; i++){
    imgs[i].style.display = 'none'; 
 } 
 imgs[slideNum].style.display = "block";
}  
nextBtn.addEventListener("click",()=>{ 
   if(slideNum < imgs.length - 1){
     slideNum++;
   }else{
    slideNum = 0;
   }
   slide();
}) 
PrevBtn.addEventListener("click",()=>{
 if(slideNum < 0){
    slideNum--;
 } else{
    slideNum = imgs.length-1;
 } 
 slide();
}) ; 
slide(); 



const sliderPagination = document.querySelectorAll(".products");
for (const slide of sliderPagination) {
   slide.addEventListener("wheel",(event)=>{
      event.preventDefault();
        slide.scrollLeft += event.deltaY;  
   })
} 
 
let sliderInterval ;

const autoplay = () =>{ 

sliderInterval = setInterval(()=>{
    if(slideNum < imgs.length - 1){
     slideNum++;
   }else{
    slideNum = 0;
   }
   slide();  
},5000)
} 

const cancel = () => {
   clearInterval(sliderInterval);
} ;
nextBtn.addEventListener("mouseover" , cancel)
nextBtn.addEventListener("mouseout" , autoplay)
PrevBtn.addEventListener("mouseover" , cancel)
PrevBtn.addEventListener("mouseout", autoplay)

autoplay(); 
