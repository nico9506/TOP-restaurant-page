export default function createHomePage() {
    /**
     * Creates the home page elements and adds them to the 'content' (class) tag
     */

    const MainContainer = document.createElement('div');
    MainContainer.classList.add('content');
    document.body.appendChild(MainContainer);

    //Appends the navbar
    MainContainer.appendChild(createNavbar());

    //Appends the main content
    MainContainer.appendChild(createMainContent());

    //Appends the footer
    MainContainer.appendChild(createFooter());
}

function createNavbar() {
    /**
     * Creates the top nav bar element
     */

    //navbar
    const navbar = document.createElement('nav');
    
    //logo (only char, not img)
    const logo = document.createElement('div');
    logo.classList.add('logo');
    logo.textContent = "FatMates!"
    navbar.appendChild(logo);

    //menu
    const menu = document.createElement('ul');
    navbar.appendChild(menu);

    //menu items generated from the following array
    const items = ['Welcome', 'Menu', 'Contact us'];
    for (let i = 0; i < items.length; i++) {
        menu.appendChild(createLiItems(items[i]));   
    }

    return navbar;
}

function createLiItems(label) {
    /**
     * Generates li elements for every entry
     */

    const li = document.createElement('li');
    li.setAttribute('id', label.slice(0, 4).toLowerCase());

    li.innerHTML += label;

    return li;
}

function createMainContent() {
    /**
     * Generates the main content container
     */

    const main = document.createElement('div');
    main.classList.add('main-content');
    main.setAttribute("id", "main-content");

    return main;
}

function createFooter() {
    /**
     * Generates the footer content
     */

    const footer = document.createElement('footer');

    const githubProfileLink = document.createElement('a');
    githubProfileLink.setAttribute('href', 'https://github.com/nico9506/TOP-restaurant-page');
    githubProfileLink.setAttribute('target', '_blank');
    githubProfileLink.classList.add('githubLink');
    githubProfileLink.innerHTML = "ICON nico9506";
    footer.appendChild(githubProfileLink);
    
    // const githubLogo = document.createElement('div');
    // githubLogo.innerHTML = "github logo";
    // githubProfileLink.appendChild(githubLogo);

    // const githubUsername = document.createElement('div');
    // githubUsername.innerHTML = "nico9506";
    // githubProfileLink.appendChild(githubUsername);

    return footer;
}