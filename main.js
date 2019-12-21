import { picsArr, Orchid } from "./data.js";

const container = document.querySelector(".container");

picsArr.forEach(item => {
    const card = document.createElement('div');
    card.setAttribute('class', "card");

    const pic = document.createElement('img');
    pic.setAttribute('src', item.route);
    card.appendChild(pic);

    const name = document.createElement('h2');
    name.textContent = item.name;
    card.appendChild(name);

    const id = document.createElement('p');
    id.textContent = `This is the orchid number ${item.id}`;
    card.appendChild(id);

    container.appendChild(card);
})

const orchid = new Orchid('ENJOY THESE FLOWERS');
document.querySelector('.main__title').innerHTML = orchid.presentation();


