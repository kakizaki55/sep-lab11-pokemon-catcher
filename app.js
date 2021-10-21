import { allPokemons } from './pokemon.js';

console.log(allPokemons);

const pokemonContainer1 = document.getElementById('poke-Img1');
const pokemonContainer2 = document.getElementById('poke-Img2');
const pokemonContainer3 = document.getElementById('poke-Img3');

const submitButton = document.getElementById('catch-pokemon');

function randomNumber(){
    const randomNum = Math.floor(Math.random() * allPokemons.length);
    return randomNum;
}



const renderPokemon = () =>{


}