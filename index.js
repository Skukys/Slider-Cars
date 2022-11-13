let blocks = document.querySelectorAll('.flex-block.img')

let clearBlocks = () => {
    blocks.forEach(item => item.classList.remove('open'))
}

blocks.forEach(item => {
    item.addEventListener('click', () => {
        clearBlocks()
        item.classList.add('open')
    })
})