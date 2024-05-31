//code for temp converter
document.getElementById("tcsubmit").onclick = function(){
    let option1 = document.getElementById("c-to-f").checked;
    let option2 = document.getElementById("f-to-c").checked;
    let ansField = document.getElementById("tcans");
    let tcinput = document.getElementById("tcinput").value;

    if(isNaN(Number(tcinput)) || tcinput===""){
        ansField.style.color = "red";
        ansField.innerHTML = "Please enter a number";
        return -1;
    }

    if(option1){
        ansField.style.color = "black";
        ansField.innerHTML = "Result: " + String(Math.round((9*tcinput/5 + 32)*10)/10) + "&deg;F";
    }else if(option2){
        ansField.style.color = "black";
        ansField.innerHTML = "Result: "+ String(Math.round(5/9*(tcinput - 32)*10)/10) + "&deg;C";
    }else{
        ansField.style.color = "red";
        ansField.innerHTML = "Please select a conversion option";
    }
}