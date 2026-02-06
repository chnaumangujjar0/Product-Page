let mainImg=document.querySelector(".images img")
let newImages=document.querySelectorAll(".newimages")
let sizeInput=document.querySelector(".select-size")
let colorInput=document.querySelector(".select-color")
let quantityInput=document.querySelector(".select-quantity input")
let size="";
let color="";
let quantity=1;
let prevImg="";
let cart = JSON.parse(localStorage.getItem("cart")) || [];

for (const element of newImages) {
    element.addEventListener("click",(e)=>{  
        
        if(prevImg==""){
            prevImg=e.target;
        } else{
            prevImg.style.transform="scale(1)";
        }
        prevImg=e.target;
        mainImg.src=e.target.src;
        e.target.style.transform="scale(0.9)";
    })
   
}

sizeInput.addEventListener("click",(e)=>{
    if(e.target.id==""){
       return;
    }
    size=e.target.id;
   
})

colorInput.addEventListener("click",(e)=>{
     if(e.target.id==""){
       return;
    }
    color=e.target.id;
   
})


quantityInput.addEventListener("change",(e)=>{
    if(e.target.value<0){
        e.target.value=0;
    }
    quantity=quantityInput.value;
    
})
document.querySelector("form").addEventListener("submit",((e)=>{
    e.preventDefault();
   
    if(size=="" || color=="" || quantity<=0){
        alert("please add data before buy")
        return;
    }
   let product={
    "name":document.querySelector("h1").innerHTML,
    "price":document.querySelector("h2").innerHTML.replace("$",""),
    "discount":document.querySelector("h3").innerHTML.replace("% OFF",""),
    "size":size,
    "color":color,
    "quantity":quantity
}
  cart.push(product)
  console.log(cart)
  localStorage.setItem("cart",JSON.stringify(cart))
 
  alert("Product added to cart")
}))
// localStorage.clear();