import "./style.css";
import createHomePage from "./home_page.js";
import generateWelcomeContainer from "./welcome_page.js";
import generateMenuContainer from "./menu_page.js";
import generateContactUsContainer from "./contact_us.js";

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

    window.scrollTo(0, 0);

    switch (e.target.id) {
        case "welc":
            document
                .getElementById("main-content")
                .appendChild(generateWelcomeContainer());
            break;

        case "menu":
            document
                .getElementById("main-content")
                .appendChild(generateMenuContainer());
            break;

        case "cont":
            document
                .getElementById("main-content")
                .appendChild(generateContactUsContainer());
            break;

        default:
            break;
    }
};

(() => {
    /**
     * IIFE to start running the webpage
     */

    //Generates the webpage
    createHomePage();

    // Add eventlistener to the navbar
    addPageControls();

    //Generates the WelcomePage by default
    document
        .getElementById("main-content")
        .appendChild(generateWelcomeContainer());
})();
