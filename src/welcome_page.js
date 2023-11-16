export default function generateWelcomeContainer() {
    /**
     * Creates the main container to display de Welcoming section
     * To be Linked to the navbar Welcome button.
     * Returns the "content-frame" element
     */
    const container = document.createElement('div');
    container.classList.add("content-frame");
    container.setAttribute('id', 'content-frame');

    const title = document.createElement('h1');
    title.textContent = "Welcome to FatMates!"
    
    const welcomeText = document.createElement('p');
    welcomeText.textContent = "G’day! Welcome to our fast food joint! We’ve got all the classics like burgers, fries, and shakes, as well as some healthier options like salads and wraps. Our food is fresh and made to order, so you can be sure you’re getting the best quality every time. Whether you’re in a rush or looking for a place to chill with your mates, we’ve got you covered. Come check us out and see why we’re one of the best fast food spots around!";

    container.appendChild(title);
    container.appendChild(welcomeText);
    
    return container;
}