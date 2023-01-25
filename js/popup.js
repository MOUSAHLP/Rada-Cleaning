let close =document.querySelector(".popup .close");    
let popupContainer =document.querySelector(".popup-container");    
let popupImages =document.querySelector(".carousel-inner");    
let popupContent =document.querySelector(".popup-container .popup");    
let popupContentTitle =document.querySelector(".popup .title");    
let popupContentText =document.querySelector(".popup .text");    
let serviceItems =document.querySelectorAll(".service-item");    

serviceItems .forEach((item)=>{
    item.onclick=()=>{
        showPopup(item);
        popupContent .classList.toggle("show");
        popupContainer .classList.toggle("show");
}
})

close.onclick=()=>{
    while (popupImages.firstChild) {
        popupImages.removeChild(popupImages.firstChild);
    }
    popupContent .classList.toggle("show");
    popupContainer .classList.toggle("show");
}
function showPopup(service){

    let images = service.children[0].dataset['images'];
    images =images.split(",")
    
    images.forEach((img,i)=>{
    let carouselItem =document.createElement("div");
    carouselItem.classList.add("carousel-item");
    if(i==0){
        carouselItem.classList.add("active");
    }

    let imgDiv =document.createElement("img");
    imgDiv.classList.add("d-block");
    imgDiv.classList.add("w-100");
    imgDiv.src=img;
    carouselItem.appendChild(imgDiv);
    popupImages.appendChild(carouselItem);
});

    let textContent = service.children[1].children[1].dataset['text'];
    popupContentText.innerHTML=textContent;
    
    let titleContent = service.children[1].children[0].innerHTML;
    popupContentTitle.innerHTML=titleContent;
   
}