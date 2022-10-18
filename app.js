// Date Setting
const d = new Date();
var f = d.getDate();
var n = d.getMonth();
const m = n+1
var p = d.getFullYear();
document.getElementById("currentdate").value = f+"/"+m+"/"+p

// Selected value in Patient input

function titleFunction() {
    var e = document.getElementById("title");
	var result = e.options[e.selectedIndex].innerText;
	document.getElementById('farm').value=result

document.getElementById("title").innerText=e[0]
}

// Malaria investigation
function malarial() {
    var e = document.getElementById("malaria");
	var result = e.options[e.selectedIndex].innerText;
	if (result==='Malarial Parasite is not seen') {
		document.getElementById('malariaremark').value='Further Confirm By MP(ICT) Antigen'
	}
if (result==='(-Ve)Negative') {
	document.getElementById('malariaremark').value='Done on ICT method'
}
}

// sugar selection

function bloodSugar () {
    var e = document.getElementById("stest");
	var result = e.options[e.selectedIndex].innerText;
	if (result==='Blood Sugar Random') {
		document.getElementById('sugar').value="120-180mg/dl"
	}
	if (result==='Blood Sugar Fasting') {
		document.getElementById('sugar').value="80-120mg/dl"
	}

	if (result==='--') {
		document.getElementById('sugar').value=""
	}
}

function bloodSugar1 () {
    var e = document.getElementById("stest1");
	var result = e.options[e.selectedIndex].innerText;
	if (result==='Blood Sugar Random') {
		document.getElementById('sugar1').value="120-180mg/dl"
	}
	if (result==='Blood Sugar Fasting') {
		document.getElementById('sugar1').value="80-120mg/dl"
	}

	if (result==='--') {
		document.getElementById('sugar1').value=""
	}
}

function bloodSugar2 () {
    var e = document.getElementById("stest2");
	var result = e.options[e.selectedIndex].innerText;
	if (result==='Blood Sugar Random') {
		document.getElementById('sugar2').value="120-180mg/dl"
	}
	if (result==='Blood Sugar Fasting') {
		document.getElementById('sugar2').value="80-120mg/dl"
	}

	if (result==='--') {
		document.getElementById('sugar2').value=""
	}
}