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
            if(currentIndex % width !== 0)
            currentIndex -= 1
            break;
        case 'ArrowRight':
            if(currentIndex % width < width -1)
            currentIndex += 1
            break;
        case 'ArrowUp':
        if(currentIndex - width >= 0)
            currentIndex -= width
            break;
        case 'ArrowDown':
            if(currentIndex + width < width * width) 
            currentIndex += width
            break;
    }

    squares[currentIndex].classList.add('frog')
}

document.addEventListener('keyup',moveForg) 