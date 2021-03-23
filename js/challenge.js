const timer = document.getElementById('counter')
const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
const heartButton = document.getElementById('heart')
const pauseButton = document.getElementById('pause')
const likesList = document.querySelector('.likes')
const likedNumbers = {}
const form = document.getElementById('comment-form')
const commentsList = document.getElementById('list')

function incrementTimer(){
    const currentNum = timer.innerText
    timer.innerText = parseInt(currentNum) + 1
}

function decrementTimer(){
    const currentNum = timer.innerText
    timer.innerText = parseInt(currentNum) - 1
}

function autoIncrement(){
    setInterval(incrementTimer, 1000)
}

function handlePause(){
    if (pauseButton.innerText === "pause"){
        pauseButton.innerText = "resume"
        const currentNum = timer.innerText
        timer.innerText = currentNum
        //disable all buttons except this one
    
    } else {
        pauseButton.innerText = "pause"
        //restart timer
        //re-enable buttons
    }

}

function handleHeartClick() {
    const currentNum = timer.innerText
    if (likedNumbers[currentNum]){
        likedNumbers[currentNum] +=1
        document.getElementById(currentNum).innerText = `${currentNum} has been liked ${likedNumbers[currentNum]} times.`
    } else {
        likedNumbers[currentNum] = 1
        likesList.innerHTML += `<li id=${currentNum}>${currentNum} has been liked ${likedNumbers[currentNum]} times.</li>`
    }
}

function submitComment(event){
    event.preventDefault()
    commentsList.innerHTML += `<p>${document.getElementById('comment-input').value}</p>`
}

plusButton.addEventListener('click', incrementTimer)
minusButton.addEventListener('click', decrementTimer)
heartButton.addEventListener('click', handleHeartClick)
pauseButton.addEventListener('click', handlePause)
form.addEventListener('submit', submitComment)