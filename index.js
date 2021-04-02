'use strict'

const btn = document.querySelector('.btn');
const suggestion = document.querySelector('.suggestion');
const joke = document.querySelector('.joke');
const quoteEl = document.querySelector('.quote');

const s = () => {
    fetch('https://www.boredapi.com/api/activity/')
        .then(d => d.json())
        .then(d => suggestion.textContent = d.activity);
};

const j = () => {
    fetch("https://icanhazdadjoke.com/", {
        headers: {
            Accept: "application/json"
        }
    }).then(d => d.json()).then(d => joke.textContent = d.joke);
};

const q = () => fetch('https://api.kanye.rest')
    .then(response => response.json())
    .then(quote => quoteEl.innerHTML = quote.quote);

const onClickFunc = () => {
    s();
    j();
    q();
};

onClickFunc();
btn.addEventListener('click', onClickFunc)
