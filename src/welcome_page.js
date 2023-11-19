import Welcome_picture from './assets/pexels-elevate-1267315.jpg';
import Welcome_video from './assets/production_id4008538(2160p).mp4';

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
    
    const welcomeText_1 = document.createElement('p');
    welcomeText_1.textContent = "G’day! Welcome to our fast food joint! We’ve got all the classics like burgers, fries, and shakes, as well as some healthier options like salads and wraps. Our food is fresh and made to order, so you can be sure you’re getting the best quality every time.";

    const img_1 = new Image();
    img_1.src = Welcome_picture;

    const welcomeText_2 = document.createElement('p');
    welcomeText_2.textContent = "Whether you’re in a rush or looking for a place to chill with your mates, we’ve got you covered.";

    const video_1 = document.createElement('video');
    video_1.src = Welcome_video;
    // const video_1_source_1 = document.createElement('source');
    // video_1_source_1.setAttribute('src', Welcome_video);
    // video_1.appendChild(video_1_source_1);
    video_1.autoplay = true;
    video_1.loop = true;
    // video_1.controls = true;
    // video_1.muted = false;

    const welcomeText_3 = document.createElement('p');
    welcomeText_3.textContent = "Come check us out and see why we’re one of the best fast food spots around!";

    container.appendChild(title);
    container.appendChild(welcomeText_1);
    container.appendChild(img_1);
    container.appendChild(welcomeText_2);
    container.appendChild(video_1);
    container.appendChild(welcomeText_3);
    
    return container;
}