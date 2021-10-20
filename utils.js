

export function getResults(){
    const JSONResults = localStorage.getItem('POKEMON') || '[]';
    const results = JSON.parse(JSONResults);
    return results;
}

export function catchPokemon(id){
    const currentResults = getResults(); 
    const caughtPokemon = currentResults.find(pokemon => pokemon.id === id);
    console.log(caughtPokemon); 
    caughtPokemon.catch ++;
    console.log(caughtPokemon);
    
    
}