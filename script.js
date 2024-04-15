let data

const boardSelectors = {
    courseBtn: document.getElementById("course"),
    teacherBtn: document.getElementById("teachers"),
    studentsBtn: document.getElementById("students"),
}

const modalBtn = document.getElementById("close-button")
const dialog = document.getElementById("dialog")
const board = document.getElementById("board")
let buttonCard = document.querySelectorAll('.button-card')




window.addEventListener('load', fetchInformation)

modalBtn.addEventListener('click', handleCloseModal)

boardSelectors.courseBtn.addEventListener('click', fetchCourseInfo)
boardSelectors.courseBtn.addEventListener('click', fetchCourseInfo)
boardSelectors.courseBtn.addEventListener('click', fetchCourseInfo)


handlePressButton()





async function fetchInformation() {
    await fetch('./data.json')
    .then((response) => response.json())
    .then((json) => data = json.data);
}


function handleCloseModal() {
    dialog.style.display = "none"  
}

function handleOpenModal(button) {
    console.log(button.target.id)
    
}

function handlePressButton() {
    buttonCard.forEach(button =>{ 
        button.addEventListener('click', (e) => handleOpenModal(e))
    }) 
}

function fetchCourseInfo() {
    const courseInfo = data.courses

    courseInfo.forEach((data) => {

        
        board.innerHTML = `
        <div class="card">
        <img src="${data.imgUrl}" alt="">
        
        <div class="card-content">
            <div>
                <h2>${data.title}</h2>
                <span>${data.slug}</span>    
            </div>
            <button id="${data.id}" class="button-card w-full">
                Saiba mais
            </button>        
        </div>
        
    
        </div>
        `
    })

    buttonCard = document.querySelectorAll('.button-card')

    handlePressButton()
}

function createCard(data) {
    courseInfo.forEach((data) => {

        
        board.innerHTML = `
        <div class="card">
        <img src="${data.imgUrl}" alt="">
        
        <div class="card-content">
            <div>
                <h2>${data.title}</h2>
                <span>${data.slug}</span>    
            </div>
            <button id="${data.id}" class="button-card w-full">
                Saiba mais
            </button>        
        </div>
        
    
        </div>
        `
    })
}

function fetchCourseInfo() {
    const courseInfo = data.courses

    createCard(courseInfo)

    buttonCard = document.querySelectorAll('.button-card')

    handlePressButton()
}

function fetchTeachersInfo() {
    const courseInfo = data.courses

    courseInfo.forEach((data) => {

        
        board.innerHTML = `
        <div class="card">
        <img src="${data.imgUrl}" alt="">
        
        <div class="card-content">
            <div>
                <h2>${data.title}</h2>
                <span>${data.slug}</span>    
            </div>
            <button id="${data.id}" class="button-card w-full">
                Saiba mais
            </button>        
        </div>
        
    
        </div>
        `
    })

    buttonCard = document.querySelectorAll('.button-card')

    handlePressButton()
}