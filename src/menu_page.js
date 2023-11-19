import kangaroo_b from './assets/pexels-rajesh-tp-1600727.jpg';
import beef_b from './assets/pexels-valeria-boltneva-1199960.jpg';
import chicken_b from './assets/pexels-giuseppe-cognata-13658574.jpg';
import marg_p from './assets/pexels-engin-akyurt-2619970.jpg';
import meat_p from './assets/pexels-brett-jordan-825661.jpg';

export default function generateMenuContainer() {
    /**
     * Creates the main container to display de Menu section
     * To be Linked to the navbar Menu button.
     * Returns the "content-frame" element
     */
    const container = document.createElement('div');
    container.classList.add("content-frame");
    container.setAttribute('id', 'content-frame');

    ////////////////////////////// SECTION 1 //////////////////////////////////
    const section_1 = document.createElement('h1');
    section_1.classList.add('menu-section');
    section_1.textContent = "Burgers";

    //---------------- item objects -------------//
    const mi_kangaroo_b = new MenuItem('Kangaroo Burger', kangaroo_b, 'Our kangaroo burger is a succulent and savory treat made with lean and tender kangaroo meat, sourced from the wild and natural Australian outback. Enjoy the rich and distinctive flavor of kangaroo, paired with fresh lettuce, tomato, cheese, and your choice of sauce. A kangaroo burger is a healthy and eco-friendly alternative to beef, with less fat, more protein, and lower greenhouse gas emissions. Try one today and experience a true Aussie delicacy.', 'burger');

    const mi_beef_b = new MenuItem('Beef Burger', beef_b, "Classic and satisfying dish that features a juicy and flavourful patty made from ground beef, sandwiched between two soft buns. You can customize your beef burger with various toppings and sauces, such as cheese, lettuce, tomato, onion, bacon, ketchup, mustard, mayonnaise, and more.", 'burger');

    const mi_chicken_b = new MenuItem('Crispy Chicken', chicken_b, "Tasty and healthy alternative to a beef burger, that features a tender and crispy patty made from chicken breast, coated with breadcrumbs and spices, and fried or baked to perfection.", 'burger');


    ////////////////////////////// SECTION 2 //////////////////////////////////
    const section_2 = document.createElement('h1');
    section_2.classList.add('menu-section');
    section_2.textContent = "Pizza";

    //---------------- item objects -------------//
    const mi_marg_p = new MenuItem('Margherita', marg_p, "Margherita pizza is a simple and delicious pizza that features a thin and crispy crust, topped with tomato sauce, fresh mozzarella cheese, and basil leaves.", 'pizza');

    const mi_meat_lov_p = new MenuItem('Meat Lovers', meat_p, "This pizza is loaded with pepperoni, ham, bacon, sausage, and beef, along with mozzarella cheese and tomato sauce. It is a classic option for meat enthusiasts who want to try a bit of everything.", 'pizza');


    container.appendChild(section_1);
    container.appendChild(createMenuItem(mi_kangaroo_b));
    container.appendChild(createMenuItem(mi_beef_b));
    container.appendChild(createMenuItem(mi_chicken_b));

    container.appendChild(section_2);
    container.appendChild(createMenuItem(mi_marg_p));
    container.appendChild(createMenuItem(mi_meat_lov_p));

    return container;
}

class MenuItem {
    constructor(name, img_url, desc, type) {
        this._name = name;
        this._img_url = img_url;
        this._desc = desc;
        this._type = type;
    }

    get name() {
        return this._name;
    }

    get img_url() {
        return this._img_url;
    }

    get desc() {
        return this._desc;
    }

    get type() {
        return this._type;
    }
}

function createMenuItem(itemObject) {
    /**
     * Generates the menu items as HTML elements
     */
    //---------------- item -------------//
    const itemContainer = document.createElement('div');
    itemContainer.classList.add('menu-item-container');
    
    const itemName = document.createElement('h1');
    itemName.classList.add('menu-item-name');
    itemName.textContent = itemObject.name;
    itemContainer.appendChild(itemName);

    const itemImg = new Image();
    itemImg.src = itemObject.img_url;
    itemContainer.appendChild(itemImg);

    const itemDesc = document.createElement('p');
    itemDesc.classList.add('menu-item-desc');
    itemDesc.textContent = itemObject.desc;
    itemContainer.appendChild(itemDesc);

    return itemContainer;
}