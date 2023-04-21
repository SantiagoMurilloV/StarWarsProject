
export const getCharacters = async () => {
    try{
        const response = await fetch('https://swapi.dev/api/people/', 
        { method: 'GET' });
    const data = await response.json();
    const persons = data.results;
    const newArray = persons.map((person) => ({ name: person.name, 
                                                gender: person.gender,
                                                eyeColor:person['eye_color'],
                                                birthYear: person['birth_year'], 
                                                mass: person.mass, 
                                                height: person.height}));
    return newArray;
    }catch(error){
        console.error(error)
    }
}





