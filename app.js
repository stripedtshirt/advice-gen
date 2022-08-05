const no = document.getElementById("no");
const advice = document.getElementById("advice");
const btn = document.getElementById("btn");
const overflow = document.querySelector(".advice");

window.onload = () => {
    getAdvice();
}

function getAdvice(){
    fetch("https://api.adviceslip.com/advice").then(response => {
    return response.json();
}).then(adviceData => {
    const adviseObj = adviceData.slip;
    // console.log(adviseObj);
    no.innerHTML = adviseObj.id
    advice.textContent = adviseObj.advice
}).catch(error => {
    console.log(error);
});
}

btn.addEventListener("click", getAdvice)

function isOverflown(overflow){
    return console.log(overflow.scrollHeight > overflow.clientHeight)
}