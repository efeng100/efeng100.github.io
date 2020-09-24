const projectCardGrid = document.querySelector("#project-cards");

const projectData = [
    {
        name: "Online Pokédex",
        image: "project-thumbnails/pokedex.PNG",
        altText: "Pokédex Thumbnail",
        description: "A web-based version of the Pokédex, the digital encyclopedia of Pokémon from the video game series. \
        It pulls data from the PokéAPI to display Pokémon in a responsive card grid design. \
        Click on a species card to see additional Pokémon information.",
        link: "efeng100.github.io/pokedex",
    },
    {
        name: "Conway's Game of Life",
        image: "project-thumbnails/conway-game-of-life.PNG",
        altText: "Conway's Game of Life Thumbnail",
        description: "A Java-based simulation of Conway’s Game of Life with a GUI built with Java Swing. \
        The underlying code is designed using the model-view-controller architecture. \
        Users can choose the board's initial state (width, height, location of living/dead cells), \
        as well as the adjacent cell thresholds for cell birth and survival. \
        The game also includes a multithreaded auto-advance feature that can update the board at a user-chosen tick rate.",
        link: "github.com/efeng100/ConwayGameOfLife",
    },
    {
        name: "AI Checkers",
        image: "project-thumbnails/checkers.PNG",
        altText: "Checkers Thumbnail",
        description: "A one-player or two-player checkers game in Python with a GUI created using the Tkinter library. \
        In one-player mode, the opponent AI player calculates their best move using a recursive minimax function that considers \
        best/worse case scenarios over a chosen number of turns in the future.",
        link: "",
    },
    {
        name: "Minesweeper",
        image: "project-thumbnails/minesweeper.PNG",
        altText: "Minesweeper Thumbnail",
        description: "Minesweeper in Python with a GUI built with the Tkinter library. \
        The user chooses the board's width and height, as well as the number of hidden mines. \
        The game includes the standard controls for revealing bombs (left click), flagging tiles (right click), and \
        revealing around a revealed tile with sufficient adjacent flags (double left click).",
        link: "",
    },
    {
        name: "Discus Dice Game",
        image: "project-thumbnails/discus.PNG",
        altText: "Discus Dice Game Thumbnail",
        description: "A Java implementation of Reiner Knizia's Dice Decathlon Discus event (a family tabletop game) \
        with a GUI built with JavaFX",
        link: "",
    },
];

function createProjectCardDiv(id) {
    let project = projectData[id];
    let card = document.createElement("div");
    card.classList.add("card");

    // Card Image
    let cardImage = document.createElement("img");
    cardImage.classList.add("card-image");
    cardImage.setAttribute("src", project.image);
    cardImage.setAttribute("alt", project.altText);
    card.appendChild(cardImage);

    // Card Overlay
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
    let project = projectData[id];

    let card = document.createElement("div");
    card.classList.add("detailed-card");

    // Detailed Card Top
    let cardTop = document.createElement("div");
    cardTop.classList.add("detailed-card-top");

    // Detailed Card Close Button
    let cardCloseButton = document.createElement("img");
    cardCloseButton.classList.add("detailed-card-close-button");
    cardCloseButton.setAttribute("src", "icons/close-button.PNG");
    cardCloseButton.addEventListener("click", removeDetailedProjectCard);
    cardTop.appendChild(cardCloseButton);

    // Detailed Card Image
    let cardImage = document.createElement("img");
    cardImage.classList.add("detailed-card-image");
    cardImage.setAttribute("src", project.image);
    cardImage.setAttribute("alt", project.altText);
    cardTop.appendChild(cardImage);

    card.appendChild(cardTop);

    // Detailed Card Bottom
    let cardBottom = document.createElement("div");
    cardBottom.classList.add("detailed-card-bottom");

    // Detailed Card Name
    let cardName = document.createElement("h4");
    cardName.classList.add("detailed-card-name");
    cardName.textContent = project.name;
    cardBottom.appendChild(cardName);

    // Detailed Card Description
    let cardDescription = document.createElement("p");
    cardDescription.classList.add("detailed-card-description");
    cardDescription.innerHTML = project.description;
    if (project.link) {
        cardDescription.innerHTML += `<br><br>Check it out here: <a href="https://${project.link}" target="_blank">${project.link}</a>`;
    }
    cardBottom.appendChild(cardDescription);

    card.appendChild(cardBottom);

    // Detailed Card Shadow
    let cardShadow = document.createElement("div");
    cardShadow.classList.add("detailed-card-shadow");
    cardShadow.addEventListener("click", removeDetailedProjectCard);

    document.body.appendChild(cardShadow);
    document.body.appendChild(card);
}

function removeDetailedProjectCard(event) {
    document.body.querySelector(".detailed-card").remove();
    document.body.querySelector(".detailed-card-shadow").remove();
}

displayProjectCards();
const navBarList = document.querySelector("#navbar").querySelector("ul");
const expandedRightNavBar = document.querySelectorAll(".nav-right");
const hamburgerButton = createHamburgerButton();
const hamburgerMenu = createHamburgerMenu();

const navBarQuery = window.matchMedia("screen and (max-width: 700px)");
navBarQuery.addEventListener("change", updateNavBar);
collapseNavBar();
updateNavBar();

function updateNavBar(event) {
    if (navBarQuery.matches) {
        collapseNavBar();
    } else {
        expandNavBar();
    }
}

function collapseNavBar() {
    expandedRightNavBar.forEach((item) => {
        item.remove();
    });
    navBarList.appendChild(hamburgerButton);
}

function expandNavBar() {
    hamburgerButton.remove();
    expandedRightNavBar.forEach((item) => {
        navBarList.appendChild(item);
    });
}

function createHamburgerButton() {
    let container = document.createElement("li");
    container.classList.add("nav-right");

    let hamburgerButton = document.createElement("img");
    hamburgerButton.classList.add("nav-item", "hamburger-button");
    hamburgerButton.setAttribute("src", "icons/hamburger-button.png");
    hamburgerButton.setAttribute("alt", "≡");
    hamburgerButton.addEventListener("click", displayHamburgerMenu);
    
    container.appendChild(hamburgerButton);
    return container;
}

function createHamburgerMenu() {
    let container = document.createElement("div");

    // Hamburger Menu Close Button
    let hamburgerMenuCloseButton = document.createElement("img");
    hamburgerMenuCloseButton.classList.add("hamburger-menu-close-button");
    hamburgerMenuCloseButton.setAttribute("src", "icons/close-button.PNG");
    hamburgerMenuCloseButton.addEventListener("click", removeHamburgerMenu);

    // Hamburger Menu
    let hamburgerMenu = document.createElement("div");
    hamburgerMenu.classList.add("hamburger-menu");

    // Hamburger Menu GitHub
    let hamburgerMenuGithub = document.createElement("a");
    hamburgerMenuGithub.classList.add("hamburger-menu-item");
    hamburgerMenuGithub.setAttribute("href", "https://github.com/efeng100");
    hamburgerMenuGithub.setAttribute("target", "_blank");
    hamburgerMenuGithub.textContent = "github";
    hamburgerMenu.appendChild(hamburgerMenuGithub);

    // Hamburger Menu LinkedIn
    let hamburgerMenuLinkedin = document.createElement("a");
    hamburgerMenuLinkedin.classList.add("hamburger-menu-item");
    hamburgerMenuLinkedin.setAttribute("href", "https://www.linkedin.com/in/efeng1/");
    hamburgerMenuLinkedin.setAttribute("target", "_blank");
    hamburgerMenuLinkedin.textContent = "linkedin";
    hamburgerMenu.appendChild(hamburgerMenuLinkedin);

    // Hamburger Menu Resume
    let hamburgerMenuResume = document.createElement("a");
    hamburgerMenuResume.classList.add("hamburger-menu-item");
    hamburgerMenuResume.setAttribute("href", "Edward Feng - Resume.pdf");
    hamburgerMenuResume.setAttribute("target", "_blank");
    hamburgerMenuResume.textContent = "resumé";
    hamburgerMenu.appendChild(hamburgerMenuResume);

    // Hamburger Menu Shadow
    let hamburgerMenuShadow = document.createElement("div");
    hamburgerMenuShadow.classList.add("hamburger-menu-shadow");
    hamburgerMenuShadow.addEventListener("click", removeHamburgerMenu);

    container.appendChild(hamburgerMenuCloseButton);
    container.appendChild(hamburgerMenu);
    container.appendChild(hamburgerMenuShadow);

    return container;
}

function displayHamburgerMenu(event) {
    document.body.appendChild(hamburgerMenu);
}

function removeHamburgerMenu(event) {
    hamburgerMenu.remove();
}