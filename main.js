import { picsArr, Orchid } from "./data.js";

const container = document.querySelector(".container");

picsArr.forEach(item => {
    const pic = document.createElement('img');
    pic.setAttribute('src', item.route);
    container.appendChild(pic);

    const name = document.createElement('p');
    name.textContent = item.name;
    container.appendChild(name);

    const id = document.createElement('p');
    id.textContent = `This is the orchid number ${item.id}`;
    container.appendChild(id);
})

const orchid = new Orchid('Orchid number');
document.querySelector('.main__title').innerHTML = orchid.presentation();


