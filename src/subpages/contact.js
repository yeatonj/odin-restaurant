import houseImage from "../img/dog-house.png";
import kipImage from "../img/kip.jpeg";
import jojoImage from "../img/jojo.jpeg";
import matsuImage from "../img/matsu.jpeg";

function createContactCard(name, title, phone, email, image) {
    const card = document.createElement("div");
    card.id = "contact-card";

    const imgContainer = document.createElement("div");
    imgContainer.className = "contact-image";
    const profilePic = document.createElement("img");
    profilePic.src = image;
    profilePic.alt = name;
    imgContainer.appendChild(profilePic);

    const dogName = document.createElement("h3");
    dogName.textContent = name;

    const dogTitle = document.createElement("p");
    dogTitle.textContent = title;

    const dogPhone = document.createElement("p");
    dogPhone.textContent = phone;
    dogPhone.classList.add("phone");

    const dogEmail = document.createElement("a");
    dogEmail.href = "mailto:" + email;
    dogEmail.textContent = email;

    card.appendChild(imgContainer);
    card.appendChild(dogName);
    card.appendChild(dogTitle);
    card.appendChild(dogPhone);
    card.appendChild(dogEmail);
    return card;
}

export function drawContact() {
    // Title
    const title = document.createElement("section");
    title.id = "title";
    const houseImg1 = document.createElement("img");
    houseImg1.src = houseImage;
    const houseImg2 = document.createElement("img");
    houseImg2.src = houseImage;
    title.appendChild(houseImg1);
    const titleHead = document.createElement("h1");
    titleHead.textContent = "Contact Us";
    title.appendChild(titleHead);
    title.appendChild(houseImg2);

    //Info
    const info = document.createElement("section");
    info.id = "info";
    const infoParagraph = document.createElement("p");
    infoParagraph.textContent = "Information about the staff here Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi hic officia totam possimus iste nisi dicta, maiores ab temporibus nulla laborum eligendi voluptate? Sequi at incidunt laudantium nobis dicta accusantium.";
    info.appendChild(infoParagraph);

    // Contact cards
    const contactCards = document.createElement("section");
    contactCards.id = "contacts";

    const dogNames = ["Kip", "JoJo", "Matsu"];
    const dogTitles = ["Head Chef", "Chief Taster", "House Manager"];
    const dogPhones = ["123-456-7890", "123-456-7891", "123-456-7892"]
    const dogEmails = ["treatmaster@fakedomain.dog", "snaileater@fakedomain.dog", "aboveitall@fakedomain.dog"];
    const dogImages = [kipImage, jojoImage, matsuImage];

    for (var i = 0; i < dogNames.length; i++) {
        contactCards.appendChild(createContactCard(
            dogNames[i],
            dogTitles[i],
            dogPhones[i],
            dogEmails[i],
            dogImages[i]
        ));
    }

    const content = document.querySelector("#content");
    content.appendChild(title);
    content.appendChild(info);
    content.appendChild(contactCards);

}