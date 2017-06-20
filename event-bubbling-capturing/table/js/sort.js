'use strict';

function handleTableClick(event) {
    if (event.target.tagName === 'TH' && event.target.dataset.propName) {

        if (event.target.dataset.dir != 1) {
            event.target.dataset.dir = 1;
        } else {
            event.target.dataset.dir = -1;
        }

        this.dataset.sortBy = event.target.dataset.propName;

        sortTable(this.dataset.sortBy, event.target.dataset.dir)
    }
}
