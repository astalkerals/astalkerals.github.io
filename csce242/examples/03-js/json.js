const getFish = async() => {
    const url = "https://portiaportia.github.io/json/fish.json";
    const response = await fetch(url);
    return response.json();
};

const showFish = async() => {
    const fish = await getFish();
    const fishListDiv = document.getElementById("fish-list");

    fish.forEach((fish) => {
        const section = document.createElement("section");
        section.classList.add("fish");
        fishListDiv.append(section);

        const h3 = document.createElement("h3");
        h3.innerHTML = fish.name;
        section.appendChild(h3);
    });
};

showFish();