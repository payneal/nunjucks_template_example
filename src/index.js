require('main.scss');
let data = {
    1: require("./data/data-1.json"),
    2: require("./data/data-2.json")
}
const MainTemplate = require('./solution.njk');
var data_page = 1;

window.onload = function() {
    add_template();
    add_button_listener();
};

function add_button_listener() {
    const button = document.querySelector('button')
    button.addEventListener('click', function(e) {
        if (data_page == 1) change_data(2);
        else change_data(1);
    });  
};

function add_template() { 
    document.getElementById(
        'content').innerHTML = MainTemplate.render(
            data[data_page]);
}

function change_data(number) {
    data_page = number;
    add_template();
};
