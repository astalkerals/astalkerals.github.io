const getShoes = async() => {
    const url = "https://portiaportia.github.io/json/shoes.json";
    const response = await fetch(url);
    return response.json();
};

const showShoes = async() => {
    const shoes = await getShoes();
    const shoeListDiv = document.getElementById("shoe-list");

    shoes.forEach((shoe) => {
        const section = document.createElement("section");
        section.classList.add("shoe");
        shoeListDiv.append(section);

        const h3 = document.createElement("h3");
        h3.innerHTML = shoe.name;
        section.appendChild(h3);
    });
};

showShoes();