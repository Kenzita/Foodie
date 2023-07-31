
const body = document.body
body.addEventListener("click", (e) => {
    console.log(e)
})

const lille = document.querySelector(".ilille")
const arras = document.querySelector(".iarras")
const lens = document.querySelector(".ilens")
const bethune = document.querySelector(".ibethune")
const valenciennes = document.querySelector(".ivalenciennes")

const aLille = document.querySelector(".carteLille")
const aArras = document.querySelector(".carteArras")
const aLens = document.querySelector(".carteLens")
const aBethune = document.querySelector(".carteBethune")
const aValenciennes = document.querySelector(".carteValenciennes")

lille.classList.add("invisible");
arras.classList.add("invisible");
lens.classList.add("invisible");
bethune.classList.add("invisible");
valenciennes.classList.add("invisible");

aLille.addEventListener("mouseover", (e) => {
  
    {
        lille.classList.replace("invisible", "visible")

    }
})
aArras.addEventListener("mouseover", (e) => {
    {
        arras.classList.replace("invisible", "visible")

    }
})
aLens.addEventListener("mouseover", (e) => {

    {
        lens.classList.replace("invisible", "visible")

    }
})
aBethune.addEventListener("mouseover", (e) => {

    {
        bethune.classList.replace("invisible", "visible")

    }
})
aValenciennes.addEventListener("mouseover", (e) => {

    {
        valenciennes.classList.replace("invisible", "visible")

    }
})

const button = document.querySelector("button")
button.classList.add("invisible")
window.addEventListener("scroll", (e)=>{

    if (window.scrollY >= 1200){
        button.classList.replace("invisible","visible")
    } else {button.classList.replace("visible","invisible")}

})
