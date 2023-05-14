const mypanels = document.querySelectorAll('.panel')

mypanels.forEach((e) => {
    e.addEventListener('click' , () => {
        removeActviveClass()
        e.classList.add('active')
    })
})

const removeActviveClass = () => {
    mypanels.forEach((e) => {
        e.classList.remove('active')
    })
}