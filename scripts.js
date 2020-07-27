const keys=document.querySelectorAll('.key')

keys.forEach(key => {
    key.addEventListener('click',() => sound(key))
})

function sound(key){
    const audio=document.getElementById(key.dataset.note)
    audio.currentTime=0
    audio.play()
    key.classList.add('pressed')
    audio.addEventListener('ended',() => {
        key.classList.remove('pressed')
    })
}