export default function createHomePage() {
    /**
     * Creates the home page elements and adds them to the 'content' (class) tag
     */

    let MainContainer = document.getElementsByClassName('content')[0];

    //Appends the navbar
    MainContainer.appendChild(createNavbar());

    //Appends the main content
    MainContainer.appendChild(createMainContent());

    //Appends the footer
    MainContainer.appendChild(createFooter());

    return ;
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
    const items = ['Home', 'Menu', 'Contact us'];
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
    // li.setAttribute('class', 'item');

    li.innerHTML += label;

    return li;
}

function createMainContent() {
    /**
     * Generates the main content container
     */

    const main = document.createElement('div');
    main.classList.add('main-content');

    const mainHeader = document.createElement('h1');
    mainHeader.textContent = "Welcome to FatMates!";
    main.appendChild(mainHeader);

    const mainText = document.createElement('p');
    mainText.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt eveniet maiores, deleniti laboriosam necessitatibus velit earum neque sint perferendis? Quod ipsa illum ducimus quidem expedita ullam velit aliquam facere totam?";
    main.appendChild(mainText);

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