function getbuttons(n){
    document.getElementById("finalresult").value += n;
}

function clearbuttons(){
    document.getElementById("finalresult").value = "";
}

function getcal(){
    let expression = document.getElementById("finalresult").value;
    try {
        document.getElementById("finalresult").value = eval(expression);
    } catch (err) {
        document.getElementById("finalresult").value = "Error";
    }
}