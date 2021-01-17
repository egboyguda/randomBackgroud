let btn = document.querySelector("button")
let boyd= document.querySelector("body")
let h1 = document.querySelector("h1")
btn.addEventListener("click",()=>{
    let rand = `rgb(${randNam()},${randNam()},${randNam()})`
    boyd.style.backgroundColor=`${rand}`
    h1.textContent=`${rand}`
})

randNam = ()=>{
    return Math.floor(Math.random()*(255)+1)
}