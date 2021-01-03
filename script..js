// Variables .
let images = document.querySelectorAll(".imgs"),
    lightBox = document.getElementById("lightBox"),
    lightBox_Image = document.getElementById("lightBox-Image");

// Events
// when Click On Images ... 
images.forEach(imgs => {
    imgs.addEventListener("click", () =>{
        lightBox.classList.add("active");
        lightBox_Image.src = imgs.src;
     })
})
    
// For Close Light Box (Hide Box)
lightBox.addEventListener("click", () =>{
    lightBox.classList.remove("active");
})