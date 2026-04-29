function calc(){
    let cost = document.getElementById("cost").value;
    let liters = document.getElementById("liters").value;

    let total = cost * liters;

    document.getElementById("result").innerText = total;
}

const button = document.querySelector(".calculate-btn");
if (button) {
    button.addEventListener("click", calc);
}
