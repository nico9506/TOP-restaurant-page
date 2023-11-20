import pinterest from './assets/pinterest.svg';
import facebook from './assets/facebook.svg';
import twitter from './assets/twitter.svg';
import instagram from './assets/instagram.svg';

export default function generateContactUsContainer() {
    /**
     * Creates the Contact Us container to display de Welcoming section
     * To be Linked to the navbar Contact-us button.
     * Returns the "content-frame" element
     */
    const container = document.createElement('div');
    container.classList.add("content-frame");
    container.setAttribute('id', 'content-frame');

    const title = document.createElement('h1');
    title.textContent = "Contact Us";

    const subtitle = document.createElement('h2');
    subtitle.textContent = "How to get in touch?";
    
    const contactText_1 = document.createElement('p');
    contactText_1.textContent = "If you have any questions, feedback, or suggestions, we’d love to hear from you. You can contact us by phone, email, or social media.";

    const contact_us_form = document.createElement('form');
    contact_us_form.id = 'contact_form';

    const ul = document.createElement('ul');

    ul.appendChild(createFormItemInput('name', 'text', 'Your Name'));
    ul.appendChild(createFormItemInput('email', 'email', 'Your Email'));
    ul.appendChild(createFormItemInput('subject', 'text', 'Subject'));
    ul.appendChild(createFormItemTextArea('msg', 'Message'));
    contact_us_form.appendChild(ul);

    const btnForm = document.createElement('button');
    btnForm.setAttribute('form', "contact_form");
    btnForm.type = 'submit';
    btnForm.value = 'Submit'
    btnForm.innerText = "BOOK A TABLE";

    const header_1 = document.createElement('h3');
    header_1.classList.add('contact-header');
    header_1.textContent = 'address';

    const value_1 = document.createElement('p');
    value_1.classList.add('contact-value');
    value_1.textContent = "123 Fifth Avenue, Melbourne, VIC 3000";

    const header_2 = document.createElement('h3');
    header_2.classList.add('contact-header');
    header_2.textContent = 'phone number';

    const value_2 = document.createElement('p');
    value_2.classList.add('contact-value');
    value_2.textContent = "+64 0419 FAT MATES";

    const header_3 = document.createElement('h3');
    header_3.classList.add('contact-header');
    header_3.textContent = 'email address';

    const value_3 = document.createElement('p');
    value_3.classList.add('contact-value');
    value_3.innerHTML = "<a href='mailto:void'>contact@fatmates.com.au</a>";

    const header_4 = document.createElement('h3');
    header_4.classList.add('contact-header');
    header_4.textContent = 'follow us';

    const value_4 = document.createElement('div');
    value_4.classList.add('icons');
    
    const pinterest_icon = new Image();
    pinterest_icon.src = pinterest;
    value_4.appendChild(pinterest_icon);

    const facebook_icon = new Image();
    facebook_icon.src = facebook;
    value_4.appendChild(facebook_icon);

    const twitter_icon = new Image();
    twitter_icon.src = twitter;
    value_4.appendChild(twitter_icon);

    const instagram_icon = new Image();
    instagram_icon.src = instagram;
    value_4.appendChild(instagram_icon);

    container.appendChild(title);
    container.appendChild(subtitle);
    container.appendChild(contactText_1);
    container.appendChild(contact_us_form);
    container.appendChild(btnForm);
    container.appendChild(header_1);
    container.appendChild(value_1);
    container.appendChild(header_2);
    container.appendChild(value_2);
    container.appendChild(header_3);
    container.appendChild(value_3);
    container.appendChild(header_4);
    container.appendChild(value_4);
    
    return container;
}

function createFormItemInput(id, type, placeholder) {
    /**
     * Generates 'label' and 'input' elements within a 'li'
     * Returns the 'li' element 
     */
    const li = document.createElement('li');

    // const label = document.createElement('label');
    // label.innerText = label_name + ":";
    // label.setAttribute('for', id);
    // li.appendChild(label);

    const input = document.createElement('input');
    input.type = type;
    input.id = id;
    input.name = "customer_" + id;
    input.placeholder = placeholder
    li.appendChild(input);

    return li;
}

function createFormItemTextArea(id, placeholder) {
    /**
     * Generates 'label' and 'textArea' elements within a 'li'
     * Returns the 'li' element 
     */
    const li = document.createElement('li');

    // const label = document.createElement('label');
    // label.innerText = label_name + ":";
    // label.setAttribute('for', id);
    // li.appendChild(label);

    const textArea = document.createElement('textarea');
    textArea.id = id;
    textArea.name = "customer_" + id;
    textArea.placeholder = placeholder;
    li.appendChild(textArea);

    return li;
}