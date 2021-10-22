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


const ctx = document.getElementById('results-chart');
// eslint-disable-next-line no-undef
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
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
