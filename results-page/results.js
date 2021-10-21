import { allPokemons } from '../pokemon.js';
import { getPokedex } from '../utils.js';

const caughtPokemonContainer = document.getElementById('caught-pokemons');
const seenPokemons = getPokedex();

function findById(id, pokemon){
    for (let poke of pokemon){
        if (poke.id === id){
            return poke;
        }
    }
}
//  console.log(allPokemons);
for (let seen of seenPokemons){
    const pokemon = findById(seen.id, allPokemons);
    
    const div = document.createElement('div');
    const img = document.createElement('img');
    const header = document.createElement('header');
    
    img.src = pokemon.url_image;
    header.textContent = pokemon.pokemon;

    const saw = document.createElement('span');
    const caught = document.createElement('spane');

    saw.textContent = `Saw: ${seen.shown}`;
    caught.textContent = `Caught: ${seen.catch}`;

    div.append(header, img, saw, caught);
    console.log(div);

    caughtPokemonContainer.append(div);

}
