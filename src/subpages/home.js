import houseImage from "../img/dog-house.png";
import boneImage from "../img/bone.svg";

export function drawHome() {
    // Title
    const title = document.createElement("section");
    title.id = "title";
    const houseImg1 = document.createElement("img");
    houseImg1.src = houseImage;
    const houseImg2 = document.createElement("img");
    houseImg2.src = houseImage;
    title.appendChild(houseImg1);
    const titleHead = document.createElement("h1");
    titleHead.textContent = "Kip's Treat Depot";
    title.appendChild(titleHead);
    title.appendChild(houseImg2);

    //Info
    const info = document.createElement("section");
    info.id = "info";
    const boneImg = document.createElement("img");
    boneImg.src = boneImage;
    info.appendChild(boneImg);
    const infoParagraph = document.createElement("p");
    infoParagraph.textContent = "Owners not satisfying your cravings for some tasty treats? Come on over for breakfast, lunch, dinner, or just a snack - they'll never know! We'll have your tail wagging in no time as you chow down on our wonderful meals. You won't need a doggie bag: we guarantee you'll be wolfing it all down.";
    info.appendChild(infoParagraph);

    // Hours
    const hours = document.createElement("section");
    hours.id = "hours";
    const hrsHead = document.createElement("h2");
    hrsHead.textContent = "Hours";
    hours.appendChild(hrsHead);
    const hoursList = document.createElement("ul");
    const hrsText = ["Monday: 6AM - 6PM", 
        "Tuesday: 6AM - 6PM", 
        "Wednesday: 6AM - 6PM", 
        "Thursday: 6AM - 6PM", 
        "Friday: 6AM - 6PM", 
        "Saturday: 10AM - 4PM", 
        "Sunday: 10AM - 4PM"];
    for (const day of hrsText) {
        const hrEntry = document.createElement("li");
        hrEntry.textContent = day;
        hoursList.appendChild(hrEntry);
    }
    hours.appendChild(hoursList);

    // Location
    const loc = document.createElement("section");
    loc.id = "location";
    const locHead = document.createElement("h2");
    locHead.textContent = "Location"
    loc.appendChild(locHead);
    const actualLoc = document.createElement("p");
    actualLoc.textContent = "303 Doghouse Lane, Bozeman, Montana";
    loc.appendChild(actualLoc);
    



    // add to page
    const content = document.querySelector("#content");
    content.appendChild(title);
    content.appendChild(info);
    content.appendChild(hours);
    content.appendChild(loc);

}