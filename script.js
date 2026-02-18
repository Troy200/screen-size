window.onresize = getw
window.onload = getw

function getw(){
    width=window.innerWidth
height=window.innerHeight

    document.getElementById("w").innerHTML= width + "px"
    document.getElementById("h").innerHTML=height + "px"

}

