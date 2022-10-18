const d = new Date();
var f = d.getDate();
var n = d.getMonth();
const m = n+1
var p = d.getFullYear();
document.getElementById("currentdate").value = f+"/"+m+"/"+p

function test1(){
    
    var b =document.getElementById("t11").value
    if (b==="m") {
        document.getElementById("t11").value=`MP`
        document.getElementById("t12").value=`(+Ve)Vivax Seen`
    }
    if (b=== "-m") {
        document.getElementById("t11").value=`MP`
        document.getElementById("t12").value=`(-Ve)Not Seen`
    }
    if (b==="w") {
        document.getElementById("t11").value=`WIDAL`
        document.getElementById("t12").value=`Positive`
        document.getElementById("t13").value=`TO 1:160 ---  TH 1:80`

    }
    if (b==="-w") {
        document.getElementById("t11").value=`WIDAL`
        document.getElementById("t12").value=`Negative`
        document.getElementById("t13").value=`TO 1:40 ---  TH 1:40`

    }
    if (b==="hp") {
        document.getElementById("t11").value=`H.Pylori`
        document.getElementById("t12").value=`Positive`
     

    }
    if (b==="-hp") {
        document.getElementById("t11").value=`H.Pylori`
        document.getElementById("t12").value=`Negative`
     

    }
    if (b==="s") {
        document.getElementById("t11").value=`Blood Sugar(R)`
        document.getElementById("t12").value=`100 mg`
        document.getElementById("t13").value=`(110-170)mg`

    }
    if (b==="bt") {
        document.getElementById("t11").value=`Bilirubin Total`
        document.getElementById("t12").value=`0.5 mg`
        document.getElementById("t13").value=`(0.1-1.0)mg`

    } 
    if (b==="ua") {
        document.getElementById("t11").value=`Uric Acid`
        document.getElementById("t12").value=`5.0 mg`
        document.getElementById("t13").value=`(3.4-7.0)mg`

    } 
    if (b==="ch") {
        document.getElementById("t11").value=`Cholestrol`
        document.getElementById("t12").value=`150 mg`
        document.getElementById("t13").value=`(150-200)mg`

    } 
    if (b==="ur") {
        document.getElementById("t11").value=`Urea`
        document.getElementById("t12").value=`30 mg`
        document.getElementById("t13").value=`(20-40)mg`

    } 
    if (b==="cr") {
        document.getElementById("t11").value=`Creatinine`
        document.getElementById("t12").value=`0.9 mg`
        document.getElementById("t13").value=`(0.6-1.3)mg`

    } 
    if (b==="hb") {
        document.getElementById("t11").value=`HB%`
        document.getElementById("t12").value=`8.0  G --50%`
        document.getElementById("t13").value=`11-16F--13-18M`

    } 

}

function test2(){
    
    var b =document.getElementById("t21").value
    if (b==="m") {
        document.getElementById("t21").value=`MP`
        document.getElementById("t22").value=`(+Ve)Vivax Seen`
    }
    if (b=== "-m") {
        document.getElementById("t21").value=`MP`
        document.getElementById("t22").value=`(-Ve)Not Seen`
    }
    if (b==="w") {
        document.getElementById("t21").value=`WIDAL`
        document.getElementById("t22").value=`Positive`
        document.getElementById("t23").value=`TO 1:160 ---  TH 1:80`

    }
    if (b==="-w") {
        document.getElementById("t21").value=`WIDAL`
        document.getElementById("t22").value=`Negative`
        document.getElementById("t23").value=`TO 1:40 ---  TH 1:40`

    }
    if (b==="hp") {
        document.getElementById("t21").value=`H.Pylori`
        document.getElementById("t22").value=`Positive`
     

    }
    if (b==="-hp") {
        document.getElementById("t21").value=`H.Pylori`
        document.getElementById("t22").value=`Negative`
     

    }
    if (b==="s") {
        document.getElementById("t21").value=`Blood Sugar(R)`
        document.getElementById("t22").value=`100 mg`
        document.getElementById("t23").value=`(110-170)mg`

    }
    if (b==="bt") {
        document.getElementById("t21").value=`Bilirubin Total`
        document.getElementById("t22").value=`0.5 mg`
        document.getElementById("t23").value=`(0.1-1.0)mg`

    } 
    if (b==="ua") {
        document.getElementById("t21").value=`Uric Acid`
        document.getElementById("t22").value=`5.0 mg`
        document.getElementById("t23").value=`(3.4-7.0)mg`

    } 
    if (b==="ch") {
        document.getElementById("t21").value=`Cholestrol`
        document.getElementById("t22").value=`150 mg`
        document.getElementById("t23").value=`(150-200)mg`

    } 
    if (b==="ur") {
        document.getElementById("t21").value=`Urea`
        document.getElementById("t22").value=`30 mg`
        document.getElementById("t23").value=`(20-40)mg`

    } 
    if (b==="cr") {
        document.getElementById("t21").value=`Creatinine`
        document.getElementById("t22").value=`0.9 mg`
        document.getElementById("t23").value=`(0.6-1.3)mg`

    } 
    if (b==="hb") {
        document.getElementById("t21").value=`HB%`
        document.getElementById("t22").value=`8.0  G --50%`
        document.getElementById("t23").value=`11-16F--13-18M`

    } 

}

function test3(){
    
    var b =document.getElementById("t31").value
    if (b==="m") {
        document.getElementById("t31").value=`MP`
        document.getElementById("t32").value=`(+Ve)Vivax Seen`
    }
    if (b=== "-m") {
        document.getElementById("t31").value=`MP`
        document.getElementById("t32").value=`(-Ve)Not Seen`
    }
    if (b==="w") {
        document.getElementById("t31").value=`WIDAL`
        document.getElementById("t32").value=`Positive`
        document.getElementById("t33").value=`TO 1:160 ---  TH 1:80`

    }
    if (b==="-w") {
        document.getElementById("t31").value=`WIDAL`
        document.getElementById("t32").value=`Negative`
        document.getElementById("t33").value=`TO 1:40 ---  TH 1:40`

    }
    if (b==="hp") {
        document.getElementById("t31").value=`H.Pylori`
        document.getElementById("t32").value=`Positive`
     

    }
    if (b==="-hp") {
        document.getElementById("t31").value=`H.Pylori`
        document.getElementById("t32").value=`Negative`
     

    }
    if (b==="s") {
        document.getElementById("t31").value=`Blood Sugar(R)`
        document.getElementById("t32").value=`100 mg`
        document.getElementById("t33").value=`(110-170)mg`

    }
    if (b==="bt") {
        document.getElementById("t31").value=`Bilirubin Total`
        document.getElementById("t32").value=`0.5 mg`
        document.getElementById("t33").value=`(0.1-1.0)mg`

    } 
    if (b==="ua") {
        document.getElementById("t31").value=`Uric Acid`
        document.getElementById("t32").value=`5.0 mg`
        document.getElementById("t33").value=`(3.4-7.0)mg`

    } 
    if (b==="ch") {
        document.getElementById("t31").value=`Cholestrol`
        document.getElementById("t32").value=`150 mg`
        document.getElementById("t33").value=`(150-200)mg`

    } 
    if (b==="ur") {
        document.getElementById("t31").value=`Urea`
        document.getElementById("t32").value=`30 mg`
        document.getElementById("t33").value=`(20-40)mg`

    } 
    if (b==="cr") {
        document.getElementById("t31").value=`Creatinine`
        document.getElementById("t32").value=`0.9 mg`
        document.getElementById("t33").value=`(0.6-1.3)mg`

    } 
    if (b==="hb") {
        document.getElementById("t31").value=`HB%`
        document.getElementById("t32").value=`8.0  G --50%`
        document.getElementById("t33").value=`11-16F--13-18M`

    } 

}

function test4(){
    
    var b =document.getElementById("t41").value
    if (b==="m") {
        document.getElementById("t41").value=`MP`
        document.getElementById("t42").value=`(+Ve)Vivax Seen`
    }
    if (b=== "-m") {
        document.getElementById("t41").value=`MP`
        document.getElementById("t42").value=`(-Ve)Not Seen`
    }
    if (b==="w") {
        document.getElementById("t41").value=`WIDAL`
        document.getElementById("t42").value=`Positive`
        document.getElementById("t43").value=`TO 1:160 ---  TH 1:80`

    }
    if (b==="-w") {
        document.getElementById("t41").value=`WIDAL`
        document.getElementById("t42").value=`Negative`
        document.getElementById("t43").value=`TO 1:40 ---  TH 1:40`

    }
    if (b==="hp") {
        document.getElementById("t41").value=`H.Pylori`
        document.getElementById("t42").value=`Positive`
     

    }
    if (b==="-hp") {
        document.getElementById("t41").value=`H.Pylori`
        document.getElementById("t42").value=`Negative`
     

    }
    if (b==="s") {
        document.getElementById("t41").value=`Blood Sugar(R)`
        document.getElementById("t42").value=`100 mg`
        document.getElementById("t43").value=`(110-170)mg`

    }
    if (b==="bt") {
        document.getElementById("t41").value=`Bilirubin Total`
        document.getElementById("t42").value=`0.5 mg`
        document.getElementById("t43").value=`(0.1-1.0)mg`

    } 
    if (b==="ua") {
        document.getElementById("t41").value=`Uric Acid`
        document.getElementById("t42").value=`5.0 mg`
        document.getElementById("t43").value=`(3.4-7.0)mg`

    } 
    if (b==="ch") {
        document.getElementById("t41").value=`Cholestrol`
        document.getElementById("t42").value=`150 mg`
        document.getElementById("t43").value=`(150-200)mg`

    } 
    if (b==="ur") {
        document.getElementById("t41").value=`Urea`
        document.getElementById("t42").value=`30 mg`
        document.getElementById("t43").value=`(20-40)mg`

    } 
    if (b==="cr") {
        document.getElementById("t41").value=`Creatinine`
        document.getElementById("t42").value=`0.9 mg`
        document.getElementById("t43").value=`(0.6-1.3)mg`

    } 
    if (b==="hb") {
        document.getElementById("t41").value=`HB%`
        document.getElementById("t42").value=`8.0  G --50%`
        document.getElementById("t43").value=`11-16F--13-18M`

    } 

}

function test5(){
    
    var b =document.getElementById("t51").value
    if (b==="m") {
        document.getElementById("t51").value=`MP`
        document.getElementById("t52").value=`(+Ve)Vivax Seen`
    }
    if (b=== "-m") {
        document.getElementById("t51").value=`MP`
        document.getElementById("t52").value=`(-Ve)Not Seen`
    }
    if (b==="w") {
        document.getElementById("t51").value=`WIDAL`
        document.getElementById("t52").value=`Positive`
        document.getElementById("t53").value=`TO 1:160 ---  TH 1:80`

    }
    if (b==="-w") {
        document.getElementById("t51").value=`WIDAL`
        document.getElementById("t52").value=`Negative`
        document.getElementById("t53").value=`TO 1:40 ---  TH 1:40`

    }
    if (b==="hp") {
        document.getElementById("t51").value=`H.Pylori`
        document.getElementById("t52").value=`Positive`
     

    }
    if (b==="-hp") {
        document.getElementById("t51").value=`H.Pylori`
        document.getElementById("t52").value=`Negative`
     

    }
    if (b==="s") {
        document.getElementById("t51").value=`Blood Sugar(R)`
        document.getElementById("t52").value=`100 mg`
        document.getElementById("t53").value=`(110-170)mg`

    }
    if (b==="bt") {
        document.getElementById("t51").value=`Bilirubin Total`
        document.getElementById("t52").value=`0.5 mg`
        document.getElementById("t53").value=`(0.1-1.0)mg`

    } 
    if (b==="ua") {
        document.getElementById("t51").value=`Uric Acid`
        document.getElementById("t52").value=`5.0 mg`
        document.getElementById("t53").value=`(3.4-7.0)mg`

    } 
    if (b==="ch") {
        document.getElementById("t51").value=`Cholestrol`
        document.getElementById("t52").value=`150 mg`
        document.getElementById("t53").value=`(150-200)mg`

    } 
    if (b==="ur") {
        document.getElementById("t51").value=`Urea`
        document.getElementById("t52").value=`30 mg`
        document.getElementById("t53").value=`(20-40)mg`

    } 
    if (b==="cr") {
        document.getElementById("t51").value=`Creatinine`
        document.getElementById("t52").value=`0.9 mg`
        document.getElementById("t53").value=`(0.6-1.3)mg`
    } 
    if (b==="hb") {
        document.getElementById("t51").value=`HB%`
        document.getElementById("t52").value=`8.0  G --50%`
        document.getElementById("t53").value=`11-16F--13-18M`

    } 

}

function test6(){
    
    var b =document.getElementById("t61").value
    if (b==="m") {
        document.getElementById("t61").value=`MP`
        document.getElementById("t62").value=`(+Ve)Vivax Seen`
    }
    if (b=== "-m") {
        document.getElementById("t61").value=`MP`
        document.getElementById("t62").value=`(-Ve)Not Seen`
    }
    if (b==="w") {
        document.getElementById("t61").value=`WIDAL`
        document.getElementById("t62").value=`Positive`
        document.getElementById("t63").value=`TO 1:160 ---  TH 1:80`

    }
    if (b==="-w") {
        document.getElementById("t61").value=`WIDAL`
        document.getElementById("t62").value=`Negative`
        document.getElementById("t63").value=`TO 1:40 ---  TH 1:40`

    }
    if (b==="hp") {
        document.getElementById("t61").value=`H.Pylori`
        document.getElementById("t62").value=`Positive`
     

    }
    if (b==="-hp") {
        document.getElementById("t61").value=`H.Pylori`
        document.getElementById("t62").value=`Negative`
     

    }
    if (b==="s") {
        document.getElementById("t61").value=`Blood Sugar(R)`
        document.getElementById("t62").value=`100 mg`
        document.getElementById("t63").value=`(110-170)mg`

    }
    if (b==="bt") {
        document.getElementById("t61").value=`Bilirubin Total`
        document.getElementById("t62").value=`0.5 mg`
        document.getElementById("t63").value=`(0.1-1.0)mg`

    } 
    if (b==="ua") {
        document.getElementById("t61").value=`Uric Acid`
        document.getElementById("t62").value=`5.0 mg`
        document.getElementById("t63").value=`(3.4-7.0)mg`

    } 
    if (b==="ch") {
        document.getElementById("t61").value=`Cholestrol`
        document.getElementById("t62").value=`150 mg`
        document.getElementById("t63").value=`(150-200)mg`

    } 
    if (b==="ur") {
        document.getElementById("t61").value=`Urea`
        document.getElementById("t62").value=`30 mg`
        document.getElementById("t63").value=`(20-40)mg`

    } 
    if (b==="cr") {
        document.getElementById("t61").value=`Creatinine`
        document.getElementById("t62").value=`0.9 mg`
        document.getElementById("t63").value=`(0.6-1.3)mg`

    } 
    if (b==="hb") {
        document.getElementById("t61").value=`HB%`
        document.getElementById("t62").value=`8.0  G --50%`
        document.getElementById("t63").value=`11-16F--13-18M`

    } 

}

// Test Name in mix test

var test = ()=>{
    alert(`   m=malaria                     w=widal                      ur=urea,

    ua=uric acids                ch=cholestrol            hp=H.pylori

    hb=HB                        Cr=creatinine             bt=bilirubin total`)
}

// Title Selection

function titleFunction() {
    var e = document.getElementById("title");
	var result = e.options[e.selectedIndex].innerText;
	document.getElementById('farm').value=result

document.getElementById("title").innerText=e[0]
}

