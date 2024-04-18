let data
let currentCategory

const boardSelectors = {
    courseBtn: document.getElementById("course"),
    teacherBtn: document.getElementById("teachers"),
    studentsBtn: document.getElementById("students"),
}

const dialogBtn = document.getElementById("close-button")
const dialog = document.getElementById("dialog")
const board = document.getElementById("board")

const titleDialog = document.getElementById("dialog-title")
const contentDialog = document.getElementById("dialog-content")

let buttonCard = document.querySelectorAll('.button-card')

window.addEventListener('load', onPageLoad)

dialogBtn.addEventListener('click', handleCloseDialog)

boardSelectors.courseBtn.addEventListener('click', fetchCourseInfo)
boardSelectors.teacherBtn.addEventListener('click', fetchTeachersInfo)
boardSelectors.courseBtn.addEventListener('click', fetchCourseInfo)



handlePressButton()



async function onPageLoad() {
    await fetchInformation()
    fetchCourseInfo()
}

async function fetchInformation() {
    await fetch('./data.json')
    .then((response) => response.json())
    .then((json) => data = json.data);
}

function handlePressButton() {
    buttonCard.forEach(button =>{ 
        button.addEventListener('click', (e) => handleOpenDialog(e))
    }) 
}



function createCard(info) {
    let stringElement = ``

    info.forEach((data) => {

        stringElement += `
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


        board.innerHTML = stringElement
    })
}

function getListOfElementsByCategory(category) {
    return data.filter(item => item.category === category)
}

function fetchCourseInfo() {
    const courseInfo = getListOfElementsByCategory('course')

    createCard(courseInfo)

    buttonCard = document.querySelectorAll('.button-card')

    handlePressButton()
}

function fetchStudentInfo() {
    const studentInfo = getListOfElementsByCategory('course')


    createCard(studentInfo)

    buttonCard = document.querySelectorAll('.button-card')

    handlePressButton()
}

function fetchTeachersInfo() {
    const teacherInfo = getListOfElementsByCategory('teacher')

    createCard(teacherInfo)

    buttonCard = document.querySelectorAll('.button-card')

    handlePressButton()
}

function getCardInfoById(id) {
    const response = data.find(card => card.id === id)

    return response
}

function handleOpenDialog(info) {
    const buttonId = info.target.id 
    const cardInfo = getCardInfoById(buttonId)


    titleDialog.textContent = cardInfo.title
    
    contentDialog.textContent = cardInfo.content

    dialog.style.display = "flex"  
}

function handleCloseDialog() {
    dialog.style.display = "none"  
}

