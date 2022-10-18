function sugar(){
    var a = document.getElementById("nmbr").value
    document.getElementById("sugr").value  =parseInt(a)*100/20
    document.getElementById("sugr").style.fontSize ="20px "
    document.getElementById("sugr").style.color ="blue "
}

function hb(){
    var b = document.getElementById("nmbr1").value

    document.getElementById("hb").value  =parseInt(b)*6.25
    document.getElementById("hb").style.fontSize ="20px "
    document.getElementById("hb").style.color =" red "
}
