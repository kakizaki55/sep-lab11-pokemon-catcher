import { allPokemons } from './pokemon.js';

const pokemonContainer1 = document.getElementById('poke-Img1');
const pokemonContainer2 = document.getElementById('poke-Img2');
const pokemonContainer3 = document.getElementById('poke-Img3');

const submitButton = document.getElementById('catch-pokemon');

function randomNumber(){
    const randomNum = Math.floor(Math.random() * allPokemons.length);
    return randomNum;
}

function renderPokemon(){
    let randomNum1 = randomNumber();
    let randomNum2 = randomNumber();
    let randomNum3 = randomNumber();

    while (randomNum1 === randomNum2 || randomNum2 === randomNum3 || randomNum1 === randomNum3){
        randomNum1 = randomNumber();
        randomNum2 = randomNumber();
        randomNum3 = randomNumber();
    }

    
    let pokemon1 = allPokemons[randomNum1];
    pokemonContainer1.src = pokemon1.url_image;
        
    let pokemon2 = allPokemons[randomNum2];
    pokemonContainer2.src = pokemon2.url_image;
        
    let pokemon3 = allPokemons[randomNum3];
    pokemonContainer3.src = pokemon3.url_image;
}
submitButton.addEventListener('click', () => {
    renderPokemon();

});


