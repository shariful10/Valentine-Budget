document.getElementById("add-btn").addEventListener('click',
    function () {
        const value = document.getElementById("input-text").value;
        const container = document.getElementById("parent-container");
        const li = document.createElement("li");
        li.innerText = value;
        li.classList.add("new-li");
        container.appendChild(li);
        const allList = document.getElementsByClassName("new-li");
        for (const item of allList) {
            item.addEventListener('click',
                function (e) {
                    e.target.parentNode.removeChild(e.target);
                }
            )
        }
    }
)

document.getElementById("hit").addEventListener("click",
    function () {
        setInnerText("p-1", "Bangladesh")
        setInnerText("p-2", "Srilanka")
        setInnerText("p-3", "India")
        setInnerText("p-4", "Pakistan")
        const inputValue = getInputValue("input-text")
        console.log(inputValue);
    }
)

function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}

function getInputValue(id){
    const value = document.getElementById(id).value;
    return value;
}