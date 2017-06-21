'use strict';

const itemsList = document.querySelector('.items-list');

function createItem(item) {
    return {
        title: item.dataset.title,
        price: item.dataset.price
    }
}

function addItem(e) {
    if (e.target.classList.contains('add-to-cart')) {
        e.preventDefault();
        addToCart(createItem(e.target));
    }
}

itemsList.addEventListener('click', addItem);
