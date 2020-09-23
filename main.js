const projectCardGrid = document.querySelector("#project-cards");

const projectData = [
    {
        name: "Online Pokédex",
        image: "project-thumbnails/pokedex.PNG",
        altText: "Pokédex Thumbnail",
        description: "",
    },
    {
        name: "Conway's Game of Life",
        image: "project-thumbnails/conway-game-of-life.PNG",
        altText: "Conway's Game of Life Thumbnail",
        description: "",
    },
    {
        name: "AI Checkers",
        image: "project-thumbnails/checkers.PNG",
        altText: "Checkers Thumbnail",
        description: "",
    },
    {
        name: "Minesweeper",
        image: "project-thumbnails/minesweeper.PNG",
        altText: "Minesweeper Thumbnail",
        description: "",
    },
    {
        name: "Discus Dice Game",
        image: "project-thumbnails/discus.PNG",
        altText: "Discus Dice Game Thumbnail",
        description: "",
    },
];

function createProjectCardDiv(id) {
    let project = projectData[id];
    let card = document.createElement("div");
    card.classList.add("card");

    let cardImage = document.createElement("img");
    cardImage.classList.add("card-image");
    cardImage.setAttribute("src", project.image);
    cardImage.setAttribute("alt", project.altText);
    card.appendChild(cardImage);

    let cardOverlay = document.createElement("div");
    cardOverlay.classList.add("card-overlay");

    let cardOverlayText = document.createElement("div");
    cardOverlayText.classList.add("card-overlay-text");

    let cardName = document.createElement("h3");
    cardName.classList.add("card-name");
    cardName.textContent = project.name;

    cardOverlayText.appendChild(cardName);
    cardOverlay.appendChild(cardOverlayText);
    card.appendChild(cardOverlay);

    card.addEventListener("click", () => {
        displayDetailedProjectCard(id);
    });

    return card;
}

function displayProjectCards() {
    for (let i = 0; i < projectData.length; i++) {
        projectCardGrid.appendChild(createProjectCardDiv(i));
    }
}

function displayDetailedProjectCard(id) {
    alert("Project descriptions coming soon!");
}

function removeDetailedProjectCard(event) {

}

displayProjectCards();