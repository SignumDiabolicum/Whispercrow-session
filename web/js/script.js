document.addEventListener ("DOMContentLoaded", event=>{
    const imageWrapper = document.querySelector(".image-wrapper")
    const body = document.body
    console.log(imageWrapper);
    document.addEventListener("scroll", scrollEvent=>{
        const position = window.scrollY;
        if(position>100) {
            imageWrapper.classList.add("scroll")
        } else{
            imageWrapper.classList.remove ("scroll")
        }
    })
})