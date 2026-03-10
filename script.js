const MAX = 70000000;

let count = localStorage.getItem("count");

if(count === null){
    count = 0;
}else{
    count = parseInt(count);
}

updateDisplay();

function addCount(num){

    count += num;

    if(count > MAX){
        count = MAX;
    }

    localStorage.setItem("count", count);

    updateDisplay();
}

function updateDisplay(){

    document.getElementById("current").innerText =
        count.toLocaleString();

}