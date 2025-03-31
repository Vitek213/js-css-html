let isBrown = false
let textBlack = false
document.getElementById("button1").addEventListener("click",()=>{
    alert("Zmáčkli jste tlačitko")
})

document.getElementById("button2").addEventListener("click",()=>{
    if(isBrown){
        document.getElementById("kostka").style.backgroundColor = "blue"
        isBrown=false
    }else{
        document.getElementById("kostka").style.backgroundColor = "brown"
        isBrown=true
    }   
})

document.getElementById("button3").addEventListener("click",()=>{
    if(textBlack){
        document.getElementById("textik").style.color = "red"
        document.getElementById("textik").innerText = "Pretty sure"
        textBlack=false
    }else{
        document.getElementById("textik").style.color = "black"
        document.getElementById("textik").innerText = "Are you sure?"
        textBlack=true
    }   
})

