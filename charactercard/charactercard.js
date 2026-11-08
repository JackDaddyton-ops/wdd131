const card = document.querySelector(".card");

const snortleblat = {
    name: "Snortleblat",
    imageSource: "../images/snortleblat.webp",
    health: 100,
    level: 5,
    className: "Swamp Beast Diplomat",
    attacked() {
        if (snortleblat.health > 0) {
            snortleblat.health -= 20;
        }
        else {
            snortleblat.health = 0;
        }
        renderCard();
    },

    levelUp() {
        snortleblat.level += 1;
        renderCard();
    },
}

function renderCard() {
    card.innerHTML = `
        <img class="image" alt="${snortleblat.name}" src=${snortleblat.imageSource}>
        <h2 class="name">${snortleblat.name}</h2>
        <section class="stats">
            <p>Class: ${snortleblat.className}</p>
            <p>Level: ${snortleblat.level}</p>
            <p>Health: ${snortleblat.health}</p>
        </section>
        <section class="buttons">
            <button>Attacked</button>
            <button>Level Up</button>
        </section>
    `;
}

function buttonPress(event) {
    if (event.target.textContent === "Attacked") {
        snortleblat.attacked();
    } else if (event.target.textContent === "Level Up") {
        snortleblat.levelUp();
    }
}
addEventListener("click", buttonPress);

renderCard();