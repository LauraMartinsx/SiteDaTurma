let data

const modalBtn = document.getElementById("close-button")
const dialog = document.getElementById("dialog")
const board = document.getElementById("board")

window.addEventListener('load', fetchInformation)

modalBtn.addEventListener('click', closeModal)
function closeModal() {
    dialog.style.display = "none"  
}


async function fetchInformation() {
    await fetch('./data.json')
    .then((response) => response.json())
    .then((json) => data = json);

    console.log(data)
}

