import { allPokemons } from './pokemon.js';
import { seenPokemon, catchPokemon, } from './utils.js';

const pokemonContainer1 = document.getElementById('poke-Img1');
const pokemonContainer2 = document.getElementById('poke-Img2');
const pokemonContainer3 = document.getElementById('poke-Img3');

const submitButton = document.getElementById('catch-pokemon');

const pokeRadio1 = document.getElementById('poke-radio1');
const pokeRadio2 = document.getElementById('poke-radio2');
const pokeRadio3 = document.getElementById('poke-radio3');

let totalPlays = 0;

function randomNumber(){
    const randomNum = Math.floor(Math.random() * allPokemons.length);
    return randomNum;
}

const renderPokemon = () => {
    let randomNum1 = randomNumber();
    let randomNum2 = randomNumber();
    let randomNum3 = randomNumber();

    while (randomNum1 === randomNum2 || randomNum2 === randomNum3 || randomNum1 === randomNum3){
        randomNum1 = randomNumber();
        randomNum2 = randomNumber();
        randomNum3 = randomNumber();
    }

    let pokemon1 = allPokemons[randomNum1];
    seenPokemon(pokemon1.id), 
    pokemonContainer1.src = pokemon1.url_image;
    pokeRadio1.value = pokemon1.id;
    pokeRadio1.class = pokemon1.pokemon;
    
    let pokemon2 = allPokemons[randomNum2];
    seenPokemon(pokemon2.id), 
    pokemonContainer2.src = pokemon2.url_image;
    pokeRadio2.value = pokemon2.id;
    pokeRadio2.class = pokemon2.pokemon;
    
    let pokemon3 = allPokemons[randomNum3];
    seenPokemon(pokemon3.id), 
    pokemonContainer3.src = pokemon3.url_image;
    pokeRadio3.value = pokemon3.id;
    pokeRadio2.class = pokemon2.pokemon;
};
renderPokemon();
submitButton.addEventListener('click', () => {
    const choosenPokemon = document.querySelector('input[type=radio]:checked');
    if (choosenPokemon){
        const choosenId = Number(choosenPokemon.value);   
        catchPokemon(choosenId);
        totalPlays ++;
        if (totalPlays >= 10){
            window.location = './results-page';
        } else {
            renderPokemon();
        }
    } 
});


