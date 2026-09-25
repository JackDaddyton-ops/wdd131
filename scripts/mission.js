
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');
let body = document.querySelector('body');
let h2 = document.querySelector('h2');
selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        logo.src = "../images/byui-logo-white.png";
        body.style.backgroundColor = "#3A3A3A"
        body.style.color = "#F1F1F1"
        h2.style.color = "#F1F1F1"

    } else {
        logo.src = "../images/byui-logo-blue.webp";
        body.style.backgroundColor = ""
        body.style.color = ""
        h2.style.color = ""
    }
}
