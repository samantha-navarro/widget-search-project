// get the .search, .input, and .btn to toggle the transition

const search = document.querySelector('.search');
const input = document.querySelector('.input');
const btn = document.querySelector('.btn');

// add event listener to button

btn.addEventListener('click', () => {
    search.classList.toggle('active');
    // console.log(search)
    // for button to toggle when clicked
    input.focus();
})