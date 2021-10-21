

export function getPokedex(){
    const JSONResults = localStorage.getItem('POKEMON') || '[]';
    const results = JSON.parse(JSONResults);
    return results;
}

export function setPokedex(pokemons){
    const stringyResults = JSON.stringify(pokemons);
    localStorage.setItem('POKEMON', stringyResults);
}

export function catchPokemon(id){
    const currentResults = getPokedex(); 
    const caughtPokemon = currentResults.find(pokemon => pokemon.id === id); 
    if (caughtPokemon){
        caughtPokemon.catch ++;
    } else {
        const newPokemon = { 'id': id, 'catch': 1, 'shown': 1 };
        currentResults.push(newPokemon);
    }
    setPokedex(currentResults);
}
export function seenPokemon(id){
    const currentResults = getPokedex(); 
    const caughtPokemon = currentResults.find(pokemon => pokemon.id === id); 
    if (caughtPokemon){
        caughtPokemon.shown ++;
    } else {
        const newPokemon = { 'id': id, 'catch': 0, 'shown': 1 };
        currentResults.push(newPokemon);
    }
    setPokedex(currentResults);
}