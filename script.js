const btn1 = document.getElementById('btn-1')
const btn2 = document.getElementById('btn-2')
const btn3 = document.getElementById('btn-3')

const pic1 = document.getElementById('pic-1')
const pic2 = document.getElementById('pic-2')
const pic3 = document.getElementById('pic-3')

btn1.addEventListener('click', () => {
    if (pic1.style.display === 'none') {
        pic1.style.display = 'block'
        pic2.style.display = 'none';
        pic3.style.display = 'none';
    } else {
         pic1.style.display = 'none'
    }
})

btn2.addEventListener('click', () => {
    if (pic2.style.display === 'none') {
        pic2.style.display = 'block'
        pic1.style.display = 'none';
        pic3.style.display = 'none';
    } else {
         pic2.style.display = 'none'
    }
})

btn3.addEventListener('click', () => {
    if (pic3.style.display === 'none') {
        pic3.style.display = 'block'
        pic1.style.display = 'none';
        pic2.style.display = 'none';
    } else {
         pic3.style.display = 'none'
    }
})