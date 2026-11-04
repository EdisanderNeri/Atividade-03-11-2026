let body = document.querySelector("body")
let button = document.querySelector("button")
body.classList.add("wheat")
button.addEventListener("click", ()=> {
    // body.classList.toggle("wheat")
    //   body.classList.toggle("blueTheme")
if(body.classList.contains("wheat")) {
    body.classList.replace("wheat", "blueTheme")
}
else {
    body.classList.replace("blueTheme", "wheat")
}
})