let select = document.querySelector('#select');
let button = document.querySelector('#button');

console.log(button);

button.addEventListener('click', () => {
    console.log(select.value);
});