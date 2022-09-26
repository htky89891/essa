const box = document.querySelector(".box")
const boxPositon = box.getBoundingClientRect()

console.log(boxPositon.y)

const moveThing = e =>{
    const fairy = document.createElement('div')
    fairy.classList.add('fairy')

    fairy.style.top = e.clientY - boxPositon.y + 'px'
    fairy.style.left = e.clientX - boxPositon.x + 'px'
    console.log(e.clientY);

    box.append(fairy)
    setTimeout(() => {
        box.removeChild(fairy)
    }, 1000)
}
box.addEventListener('mousemove' , e => moveThing(e))