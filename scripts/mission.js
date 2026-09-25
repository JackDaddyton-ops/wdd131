
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        logo.src = "../images/byui-logo-white.png";
        document.querySelector('body').style.backgroundColor = "#3A3A3A"
        document.querySelector('body').style.color = "#F1F1F1"
        document.querySelector('h2').style.color = "#F1F1F1"

    } else {
        logo.src = "../images/byui-logo-blue.webp";
        document.querySelector('body').style.backgroundColor = "";
        document.querySelector('body').style.color = "";
        document.querySelector('h2').style.color = "";
    }
}
