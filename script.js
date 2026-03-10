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

    save();
}

function removeCount(num){

    count -= num;

    if(count < 0){
        count = 0;
    }

    save();
}

function save(){

    localStorage.setItem("count", count);
    updateDisplay();

}

function updateDisplay(){

    document.getElementById("current").innerText =
        count.toLocaleString();

    let percent = (count / MAX) * 100;

    document.getElementById("percentage").innerText =
        percent.toFixed(6) + "% completed";

    document.getElementById("progress-bar").style.width =
        percent + "%";

}