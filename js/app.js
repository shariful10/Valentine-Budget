document.getElementById("kitkat-buy-btn").addEventListener("click",
    function () {
    const quantity = getInputValue("kitkat-quantity")
    const kitkatPrice = document.getElementById("kitkat-price").innerText;
    const kitkatCost = parseInt(kitkatPrice) * quantity;
    setInnerText("chocolate", kitkatCost);
    total();
    }
)

document.getElementById("rose-buy-btn").addEventListener("click",
    function () {
    const quantity = getInputValue("rose-quantity")
    const rosePrice = document.getElementById("rose-price").innerText;
    const roseCost = parseInt(rosePrice) * quantity;
    setInnerText("rose", roseCost);
    total();
    }
)

document.getElementById("diary-buy-btn").addEventListener("click",
    function () {
    const quantity = getInputValue("diary-quantity")
    const diaryPrice = document.getElementById("diary-price").innerText;
    const diaryCost = parseInt(diaryPrice) * quantity;
    setInnerText("diary", diaryCost);
    total();
    }
)

function setInnerText(id, value){
    document.getElementById(id).innerText = value;
}

function getInputValue(id){
    const value = document.getElementById(id).value;
    return parseInt(value);
}

function getInputText(id){
    const textValue = document.getElementById(id).innerText;
    return parseInt(textValue);
}

function total(){
    const chocolate = getInputText("chocolate");
    const rose = getInputText("rose");
    const diary = getInputText("diary");
    const totalSum = chocolate + rose + diary;
    setInnerText("total", totalSum)
}

document.getElementById("promoApplyBtn").addEventListener("click", function(){
    const promoCode = getInputValue("promo-code");
    if(promoCode == 101){
        const total = document.getElementById("total").innerText
        const sum = total - parseInt(total) * 0.1;
        const cost = setInnerText("all-total", sum);
        cost = sum;
    }
    else{
        alert("Wrong promo code. Please input a valid promo code.")
    }
})