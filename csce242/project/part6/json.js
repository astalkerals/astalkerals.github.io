const url = "https://astalkerals.github.io/csce242/jsons/";
const getChars = async() => {
    const response = await fetch(url + "characters.json");
    return response.json();
};

const showChars = async() => {
    const characters = await getChars();
    const characterDiv = document.getElementById("characters");

    characters.forEach((char) => {
        const section = document.createElement("section");
        section.classList.add("characters");
        characterDiv.append(section);

        const h3 = document.createElement("h3");
        h3.innerHTML = char.name;
        section.appendChild(h3);

        const img = document.createElement("img");
        section.prepend(img);
        img.src = url + char.imgsrc;

        const ul = document.createElement("ul");
        section.appendChild("ul");

        const liOccupation = document.createElement("li");
        liOccupation.innerHTML = "Occupation: " + char.occupation;
        ul.appendChild(liOccupation);

        const liBackground = document.createElement("li");
        liBackground.innerHTML = "General Background " + char.generalBackground;
        ul.appendChild(liBackground);

        const liPersonality = document.createElement("li");
        liPersonality.innerHTML = "Personality " + char.personality;
        ul.appendChild(liPersonality);

        const liRTD = document.createElement("li");
        liRTD.innerHTML = "Relation to Deceased " + char.relationToDeceased;
        ul.appendChild(liRTD);

        const liSusATT = document.createElement("li");
        liSusATT.innerHTML = "Suspicious Attributes: " + char.suspiciousAttributes;
        ul.appendChild(liOccupation);

        const liSecret = document.createElement("li");
        liSecret.innerHTML = "Biggest Secret: " + char.biggestSecret;
        ul.appendChild(liSecret);
    });
};


showChars();
/*const showFish = async() => {
    const fish = await getFish();
    const fishListDiv = document.getElementById("fish-list");

    fish.forEach((fish) => {
        const section = document.createElement("section");
        section.classList.add("fish");
        fishListDiv.append(section);

        const h3 = document.createElement("h3");
        h3.innerHTML = fish.title;
        section.appendChild(h3);

        const pLength = document.createElement("p");
        pLength.innerHTML = `Length: ${fish.length}`;
        section.appendChild(pLength);

        const h4 = document.createElement("h4");
        h4.innerHTML = "Colors:";
        section.append(h4);

        const ul = document.createElement("ul");
        section.append(ul);

        //loop through the colors
        fish.colors.forEach((color)=>{
            const li = document.createElement("li");
            li.innerHTML = color;
            ul.append(li);
        });

        const img = document.createElement("img");
        section.prepend(img);
        img.src = `https://portiaportia.github.io/json/${fish.img}`;
    });
};*/