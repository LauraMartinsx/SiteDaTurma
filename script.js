let data

const courseBtn = document.getElementById("course")
const teachersBtn = document.getElementById("teachers")
const studentsBtn = document.getElementById("students")


const modalBtn = document.getElementById("close-button")
const dialog = document.getElementById("dialog")
const board = document.getElementById("board")

window.addEventListener('load', fetchInformation)

modalBtn.addEventListener('click', closeModal)
function closeModal() {
    dialog.style.display = "none"  
}

courseBtn.addEventListener('click', fetchCourseInfo)

async function fetchInformation() {
    await fetch('./data.json')
    .then((response) => response.json())
    .then((json) => data = json.data);

    console.log(data)
}

function fetchCourseInfo() {
    const courseInfo = data.courses

    console.log(courseInfo)

    courseInfo.forEach((data) => {
        console.log(data)

        
        board.innerHTML = `
        <div class="card">
        <img src="${data.imgUrl}" alt="">
        
        <div class="card-content">
            <div>
                <h2>${data.title}</h2>
                <span>${data.slug}</span>    
            </div>
            <button class="button-card w-full">
                Saiba mais
            </button>        
        </div>
        
    
        </div>
        `
    })

}