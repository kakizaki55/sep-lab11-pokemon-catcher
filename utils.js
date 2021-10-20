

export function getResults(){
    const JSONResults = localStorage.getItem('POKEMON') || '[]';
    const results = JSON.parse(JSONResults);
    return results;
}

export function setResults(pokemon){
    const stringyResults = JSON.stringify(pokemon);
    localStorage.setItem('POKEMON', stringyResults);
}

export function catchPokemon(id){
    const currentResults = getResults(); 
    // console.log(currentResults, 'current results');

    const caughtPokemon = currentResults.find(pokemon => pokemon.id === id);
    // console.log(caughtPokemon, 'caught Pokemon'); 

    caughtPokemon.catch ++;
    console.log(caughtPokemon);
    setResults(currentResults);

    // console.log(JSON.stringify(caughtPokemon));
}