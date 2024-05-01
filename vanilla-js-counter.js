let btn = document.querySelector('.btn');
let count = document.querySelector('.count');

let counter = 0;

btn.addEventListener('click', () => {
    counter++;
    count.textContent = counter;
    }
);