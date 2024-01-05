window.addEventListener("scroll", function(){
    let nav = document.querySelector("nav");
    nav.classList.toggle("nav-fill", window.scrollY > 0);
})

function shrink(e){
    let enlargedPic = document.getElementById("enlarged-pic")
    let bg = document.getElementById("black-overlay")
    bg.hidden = true
    enlargedPic.src = ""
    enlargedPic.hidden = true
}
function enlarge(e)
{
    console.log(e.src)
    let enlargedPic = document.getElementById("enlarged-pic")
    let bg = document.getElementById("black-overlay")
    bg.hidden = false
    enlargedPic.src = e.src
    enlargedPic.hidden = false

    // make the alt text show up on enlarged image as a description
    let picText = document.getElementById("enlarged-alt")
    picText.innerHTML = e.alt
}


function selfieIn(e)
{
    console.log(e.src)
    e.src = "Assets/Tahoe_Selfie.jpg";
}

function selfieOut(e)
{
    console.log("OUT")
    e.src = "Assets/Tahoe_Selfie-BnW.jpg";
}


// Projects page

// scroller
let scrollers = document.querySelectorAll(".scroller");

//only needed if someone has reduced motion turned on
if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches)
{
    addAnimation();
}

function addAnimation(){
    scrollers.forEach(scroller => {
        scroller.setAttribute("data-animated", true);

        const innerScroller = scroller.querySelector(".inner-scroller");
        const scrollerContent = Array.from(innerScroller.children);

        scrollerContent.forEach(item => {
            let duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            innerScroller.appendChild(duplicatedItem);
            
        })

    })
}