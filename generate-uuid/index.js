import { v4 } from 'uuid'

let generateBtn = document.getElementById('generate-btn'),
    text = document.querySelector('.text')

generateBtn.addEventListener('click', function () {
    text.textContent = v4()
})
