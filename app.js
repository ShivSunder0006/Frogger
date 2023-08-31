const timeLeftDisplay = document.getElementById('time-left')
const resultDisplay =  document.getElementById('result')
const startPause =  document.getElementById('start-stop-btn')
const squares = document.querySelectorAll('.grid div')
let currentIndex = 76
const width = 9
function moveForg(e){
    // console.log('clicked')
    squares[currentIndex].classList.remove('frog')
    switch(e.key){
        case 'ArrowLeft':
            console.log('moveleft')
            currentIndex -= 1
            break;
        case 'ArrowRight':
            console.log('moveright')
            currentIndex += 1
            break;
        case 'ArrowUp':
            console.log('moveup')
            currentIndex -= width
            break;
        case 'ArrowDown':
            console.log('movedown')
            currentIndex += width
            break;
    }

    squares[currentIndex].classList.add('frog')
}

document.addEventListener('keyup',moveForg) 