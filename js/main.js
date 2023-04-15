const elForm = document.getElementById('form')
const elInpOne = document.querySelector('.inp-one')
const elInpTwo = document.querySelector('.inp-two')

const elRezOne = document.querySelector('.rez-1')
const elRezTwo = document.querySelector('.rez-2')

elForm.addEventListener('submit', (e) =>{
    e.preventDefault()
    let newInpOne = elInpOne.value
    let newInpTwo = elInpTwo.value

    elRezOne.textContent = newInpOne.slice(0,1).toUpperCase() + newInpOne.slice(1).toLowerCase()
    elRezTwo.textContent = newInpTwo.slice(0,1).toUpperCase() + newInpTwo.slice(1).toLowerCase()





    // console.log(elInpOne.value);
    // console.log(elInpTwo.value);
})