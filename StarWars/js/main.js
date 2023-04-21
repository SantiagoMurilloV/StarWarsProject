document.addEventListener('DOMContentLoaded', async () => {
    const button = document.createElement('button');
    button.className = 'button';

    const renderCharacter = (character, template, containerCards) =>{
        const clone = template.content.cloneNode(true);
        clone.querySelector('.cardName').textContent = character.name;
        switch (character.gender) {
            case ('n/a'):
                clone.querySelector('.cardBodyImg').setAttribute('src', './img/avatar_.png');
                break;
            case ('male'):
                clone.querySelector('.cardBodyImg').setAttribute('src', './img/avatar_.png');
                break;
            case ('female'):
                clone.querySelector('.cardBodyImg').setAttribute('src', './img/avatar_.png');
                break;
        }
        clone.querySelector('#gender').textContent = `Gender: ${character.gender}`;
        clone.querySelector('#mass').textContent = `Mass: ${character.mass}`;
        clone.querySelector('#hight').textContent = `Height: ${character.height}`;
        clone.querySelector('#eyeColor').textContent = `Eye Color: ${character.eye_color}`;
        clone.querySelector('#birth').textContent = `Birth Year: ${character.birth_year}`;
        containerCards.appendChild(clone);
    }

    const paintAllCards = (characters) => {
        const mainContainer = document.querySelector('.mainContainer');
        const containerCards = document.createElement('div');
        containerCards.className = 'containerCards';
        const template = document.querySelector('#templateCard');
        characters.forEach((character) => renderCharacter(character, template, containerCards));
        containerCards.appendChild(button);
        mainContainer.appendChild(containerCards);
    };

    const getCharacters = async () => {
        try {
            const res = await fetch('https://swapi.dev/api/people/');
            const data = await res.json();
            return data;
        } catch (error) {
            console.log(error)
        }
    };
    
    const charactersData = await getCharacters();
    paintAllCards(charactersData.results);
    let nextPage =  charactersData.next;

    button.addEventListener('click', async () => {
        try {
            const res = await fetch(nextPage);
            const dataNewPage = await res.json();
            const nextCharacters = dataNewPage;
            paintAllCards(nextCharacters.results);
            nextPage = nextCharacters.next;

        } catch (error) {
            console.log(error)
        }
    });
});









