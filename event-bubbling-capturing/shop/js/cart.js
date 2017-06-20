'use strict';

const itemsList = document.querySelector('.items-list');

function createItem(item) {
    return {
        title: item.dataset.title,
        price: item.dataset.price
    }
}

function addItem(click) {
    if (click.target.classList.contains('add-to-cart')) {
        addToCart(createItem(click.target));
    }
}

itemsList.addEventListener('click', addItem);
