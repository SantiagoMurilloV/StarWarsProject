
import { getCharacters } from "./apiFetch.js";
const data = await getCharacters();


const cardHeader = document.createElement('div')
cardHeader.id = 'cardHeader'
document.body.appendChild(cardHeader)

fetch("card1.html")
    .then(response => response.text())
    .then(indexHTML => {
            const characters = [...data]
            const cardHeader = document.getElementById('cardHeader');

                characters.forEach(character => {

                const characterdiv = document.createElement('div');
                characterdiv.innerHTML = indexHTML;
                characterdiv.querySelector('#name').textContent = character.name;
                characterdiv.querySelector('#height').textContent = `Height: ${character.height}`;
                characterdiv.querySelector('#mass').textContent = `Mass: ${character.mass}`;
                characterdiv.querySelector('#eye-color').textContent = `Eyes colors: ${character['eyeColor']}`;
                characterdiv.querySelector('#birth-year').textContent = `birth-year: ${character['birth_year']}`;;
                characterdiv.querySelector('#gender').textContent = `Gender: ${character.gender}`;

                cardHeader.appendChild(characterdiv);
            });

        }).catch(error => {
            console.log('Error:', error);
        })
    







