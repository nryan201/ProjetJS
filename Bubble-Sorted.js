
var container = document.getElementById("array");

function updateValue() {
    var numElements = document.getElementById("numElements").value;
    document.getElementById("numElementsValue").textContent = numElements;
}

function generateArray() {
    container.innerHTML = ''; // Clear previous blocks
    updateValue(); // Update displayed value
    let numElements = document.getElementById("numElements").value;
    for (let i = 0; i < numElements; i++) {
        var value = Math.ceil(Math.random() * 100);
        var array_ele = document.createElement("div");

        array_ele.classList.add("block");
        array_ele.style.height = `50px`;
        array_ele.style.transform = `translate(${i * 52}px)`;

        var array_ele_label = document.createElement("label");
        array_ele_label.classList.add("block_id");
        array_ele_label.innerText = value;

        array_ele.appendChild(array_ele_label);
        container.appendChild(array_ele);
    }
}

async function bubbleSorted(delay = 100) {
    var blocks = document.querySelectorAll(".block");
    var len = blocks.length;

    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            blocks[j].style.backgroundColor = "#FF4949";
            blocks[j + 1].style.backgroundColor = "#FF4949";

            await new Promise((resolve) =>
                setTimeout(resolve, delay)
            );

            var value1 = Number(blocks[j].childNodes[0].innerText);
            var value2 = Number(blocks[j + 1].childNodes[0].innerText);

            if (value1 > value2) {
                let temp = blocks[j].style.transform;
                blocks[j].style.transform = blocks[j + 1].style.transform;
                blocks[j + 1].style.transform = temp;

                container.insertBefore(blocks[j + 1], blocks[j]);
                blocks = document.querySelectorAll(".block");
            }

            blocks[j].style.backgroundColor = "#58B7FF";
            blocks[j + 1].style.backgroundColor = "#58B7FF";
        }
        blocks[len - i - 1].style.backgroundColor = "#13CE66";
    }
}