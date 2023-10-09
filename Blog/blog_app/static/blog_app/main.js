// Function to enable smooth scrolling upon clicking on nav
/*
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        })
    })
})
*/

const imageContainer = document.querySelector('.image-container')
const prevBtn = document.getElementById("prev")
const nextBtn = document.getElementById("next")

let x = 0

prevBtn.addEventListener("click", () => {
    x = x + 45
    rotate()
})

nextBtn.addEventListener("click", () => {
    x = x - 45
    rotate()
})


function rotate() {
    imageContainer.style.transform = `perspective(1000px) rotateY(${x}deg)`
}


// functions for interactive boxer dog image

const descriptions = {
    frontend: {
        title: "Front End",
        content: "HTML5, CSS3, Javascript"
    },
    backend: {
        title: "Back End",
        content: "Python, Django"
    },
    tools: {
        title: "Tools",
        content: "Git"
    }
}

// Handle the hovering over the image. Call the update image nad description function defined below
function handleImageHover(event) {
    const image = document.getElementById("boxer-img")
    const imageTop = image.getBoundingClientRect().top
    const hoverPosition = event.clientY - imageTop

    const sectionHeight = image.clientHeight / 3

    if (hoverPosition <= sectionHeight) {
        updateImage('top')
        updateDescription('frontend')
    } else if (hoverPosition <= (2 * sectionHeight)) {
        updateImage('mid')
        updateDescription('tools')
    } else {
        updateImage('bot')
        updateDescription('backend')
    }
}

// Create an update image function

function updateImage(event) {
    const image = document.getElementById('boxer-img')
    switch (event) {
        case 'top':
            image.src = `${STATIC_URL}blog_app/images/boxer_top.png`
            break
        case 'mid':
            image.src = `${STATIC_URL}blog_app/images/boxer_middle.png`
            break
        case 'bot':
            image.src = `${STATIC_URL}blog_app/images/boxer_bottom.png`
            break
        default:
            image.src = `${STATIC_URL}blog_app/images/blank_boxer.png`
            break
    }
}

// Create update description function

function updateDescription(narrative) {
    const descriptionDiv = document.getElementById('description')
    const data = descriptions[narrative]

    if (data) {
        descriptionDiv.innerHTML = `
        <h3>${data.title}</h3>
        <p>${data.content}</p>`
    }
}


// Ensure boxer reserts when not hovering

function resetBoxer() {
    const image = document.getElementById('boxer-img')
    image.src = `${STATIC_URL}blog_app/images/blank_boxer.png`
    document.getElementById('description').innerHTML = `<h3>Key Development Skills</h3>
        <p><em>(Hover over elements of Brutus to see my key development stack!)</em></p>`
}

document.querySelector('.boxer-image-section').addEventListener('mousemove', handleImageHover)
