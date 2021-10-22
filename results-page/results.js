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

    const saw = document.createElement('p');
    const caught = document.createElement('spane');
    saw.textContent = `Saw: ${seen.shown}`;
    caught.textContent = `Caught: ${seen.catch}`;

    div.append(header, img, saw, caught);
    caughtPokemonContainer.append(div);
    
}

const pokemonNames = seenPokemons.map((poke) =>{
    const pokemon = findById(poke.id, allPokemons);
    return pokemon.pokemon;
});
console.log(seenPokemons);
const encounteredPokemon = seenPokemons.map(poke => poke.shown);
const catchPokemon = seenPokemons.map(poke => poke.catch);
console.log(catchPokemon);




const ctx = document.getElementById('results-chart');
//eslint-disable-next-line no-undef
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: pokemonNames, 
        datasets: [{
            label: 'encountered Pokemon',
            data: encounteredPokemon,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }


});
const caughtChart = document.getElementById('catch-chart');
//eslint-disable-next-line no-undef
new Chart(caughtChart, {
    type: 'bar',
    data: {
        labels: pokemonNames, 
        datasets: [{
            label: 'Caught Pokemon',
            data: catchPokemon,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }


});

