import houseImage from "../img/dog-house.png";

function menuCard(dishName, dishDescription, price, dishPicture) {
    const card = document.createElement("div");
    card.id = "menu-card";

    const dishTitle = document.createElement("h3");
    dishTitle.textContent = dishName;

    const dishPrice = document.createElement("h3");
    dishPrice.textContent = price;

    const imgContainer = document.createElement("div");
    imgContainer.className = "dish-image";
    const img = document.createElement("img");
    img.src = dishPicture;
    img.alt = dishName;
    imgContainer.appendChild(img);

    const dishDescrip = document.createElement("p");
    dishDescrip.textContent = dishDescription;

    card.appendChild(dishTitle);
    card.appendChild(dishPrice);
    card.appendChild(imgContainer);
    card.appendChild(dishDescrip);
    return card;
}



export function drawMenu() {
    // Title
    const title = document.createElement("section");
    title.id = "title";
    const houseImg1 = document.createElement("img");
    houseImg1.src = houseImage;
    const houseImg2 = document.createElement("img");
    houseImg2.src = houseImage;
    title.appendChild(houseImg1);
    const titleHead = document.createElement("h1");
    titleHead.textContent = "Menu";
    title.appendChild(titleHead);
    title.appendChild(houseImg2);

    // Breakfast
    const breakfast = document.createElement("section");
    breakfast.id = "breakfast";
    const breakfastHead = document.createElement("h2");
    breakfastHead.textContent = "Breakfast";
    breakfast.appendChild(breakfastHead);
    const bNames = ["Kibble", "Wet Food"];
    const bPrices = ["$2", "$15"];
    const bDescrips = ["The standard dry breakfast. Probably not your favorite, but it does get the job done... We're not really sure of the ingredients, to be honest.",
        "For the discerning canine, something with a softer mouth feel. Made with only the finest wild meat."
    ];
    const bPics = ["", ""];
    for (var i = 0; i < bNames.length; i++) {
        breakfast.appendChild(menuCard(bNames[i], bDescrips[i], bPrices[i], bPics[i]));
    }

    // Lunch
    const lunch = document.createElement("section");
    lunch.id = "lunch";
    const lunchHead = document.createElement("h2");
    lunchHead.textContent = "Lunch";
    lunch.appendChild(lunchHead);
    const lNames = ["Salmon Snacks", "Pig Ear"];
    const lPrices = ["$14", "$4"];
    const lDescrips = ["Made from fresh, wild Alaskan salmon. The single best treat ever, 5 paws out of 5!",
        "Dried pig ear. Good for snacking, but you'll probably want more than one for a full meal. Buy a few and take them home to hide around your owner's house!"
    ];
    const lPics = ["", ""];
    for (var i = 0; i < lNames.length; i++) {
        lunch.appendChild(menuCard(lNames[i], lDescrips[i], lPrices[i], lPics[i]));
    }


    // Dinner
    const dinner = document.createElement("section");
    dinner.id = "dinner";
    const dinnerHead = document.createElement("h2");
    dinnerHead.textContent = "Dinner";
    dinner.appendChild(dinnerHead);
    const dNames = ["Wet/Dry Mix", "Steak"];
    const dPrices = ["$12", "$30"];
    const dDescrips = ["The old standard. Perfectly proportioned between wet and dry to make sure you get a satisfying texture.",
        "We can see the drool from here. This is a prime cut of steak, guaranteed to satisfy your appetite. Bone free - we know how bad steak bones are for you, even if you wish you could chew on it..."
    ];
    const dPics = ["", ""];
    for (var i = 0; i < dNames.length; i++) {
        dinner.appendChild(menuCard(dNames[i], dDescrips[i], dPrices[i], dPics[i]));
    }


    // Drinks
    const drinks = document.createElement("section");
    drinks.id = "drinks";
    const drinksHead = document.createElement("h2");
    drinksHead.textContent = "Drinks";
    drinks.appendChild(drinksHead);
    const drNames = ["Water", "Puddle Scum Water"];
    const drPrices = ["$1", "$6"];
    const drDescrips = ["It's water - probably what you should be drinking!",
        "Why doesn't your owner want you drinking this? We're not sure, honestly, which is why we serve it. Fresh off the ground!"
    ];
    const drPics = ["", ""];
    for (var i = 0; i < drNames.length; i++) {
        drinks.appendChild(menuCard(drNames[i], drDescrips[i], drPrices[i], drPics[i]));
    }




    const content = document.querySelector("#content");
    content.appendChild(title);
    content.appendChild(breakfast);
    content.appendChild(lunch);
    content.appendChild(dinner);
    content.appendChild(drinks);
}