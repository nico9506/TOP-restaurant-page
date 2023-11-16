import "./style.css";
import createHomePage from "./home_page.js";
import generateWelcomeContainer from "./welcome_page.js";

const addPageControls = () => {
    /**
     * Adds eventlistener to the menu links
     */

    const welcome = document.getElementById("welc");
    const menu = document.getElementById("menu");
    const contact = document.getElementById("cont");

    welcome.addEventListener("click", cleanAndGenerateContent);
    menu.addEventListener("click", cleanAndGenerateContent);
    contact.addEventListener("click", cleanAndGenerateContent);
};

const cleanAndGenerateContent = (e) => {
    try {
        document.getElementById("content-frame").remove();
    } catch (error) {
        console.log(error);
        console.log("No CONTENT-FRAME element");
    }

    switch (e.target.id) {
        case "welc":
            document
                .getElementById("main-content")
                .appendChild(generateWelcomeContainer());
            break;

        case "menu":
            console.log("id: menu; from: index.js");
            break;

        case "cont":
            console.log("id: cont; from: index.js");
            break;

        default:
            break;
    }
};

//Generates the webpage
createHomePage();

// Add eventlistener to the navbar
addPageControls();
