let dark = document.querySelector(".dark")
let contain = document .querySelector(".contain")
let h1 = document.querySelector("h1")
let h3 = document.querySelector("h3")
let html = document.querySelector("html")
let body =document.querySelector("body")
let link = document.querySelector(".links-1")
let secLink = document.querySelector(".links-2")
let thirdLink = document.querySelector(".links-3")
let fourthLink = document.querySelector(".links-4")
let firstImg = document.querySelector(".img-1")
let secImg = document.querySelector(".img-2")
let firstP = document.querySelector(".first-p")



// insert first image
let theLink = document.querySelector(".first-link")
//
let theImage = document.querySelector(".first-img")
//create element
let insertedImg = document.createElement("img")
insertedImg.src = "images/alarado-icon-homepage-dark.svg"
theLink.appendChild(insertedImg)
insertedImg.style.display="none"
insertedImg.classList.add("first-img")




//insert dark modeimage
let img = document.createElement("img")
img.src = "images/Moon_fill.svg"
dark.appendChild(img)
img.style.display = "none"
img.classList.add("img-1")
img.style.backgroundColor = "#FFFFFF" 




firstImg .onclick = function(){
    contain.style.backgroundColor = "#111729"
    html.style.backgroundColor = "#111729"
    body.style.color = "#FFFFFF"
    /////
    theImage.style.display = "none"
    insertedImg.style.display = "block"
    //
    link.style.color = "#FFFFFF"
    secLink.style.color = "#FFFFFF"
    thirdLink.style.color = "#FFFFFF"
    fourthLink.style.color = "#FFFFFF"
    firstImg.style.display = "none"
    img.style.display = "block"
    secImg.style.backgroundColor = "transparent"
    firstP.style.opacity = "0.4"

}

//light mode

secImg.onclick = function(){
    contain.style.backgroundColor = "#F2F9FE"
    html.style.backgroundColor = "#F2F9FE"
    body.style.color = "#111729"
    /////
    theImage.style.display = "block"
    insertedImg.style.display = "none"
    //
    link.style.color = "#111729"
    secLink.style.color = "#111729"
    thirdLink.style.color = "#111729"
    fourthLink.style.color = "#111729"
    firstImg.style.display = "block"
    img.style.display = "none"
    firstP.style.opacity = "1"
    secImg.style.backgroundColor = "#FFFFFF"
}