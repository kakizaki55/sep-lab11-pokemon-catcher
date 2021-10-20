// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { getResults, catchPokemon } from '../utils.js';

const test = QUnit.test;


test('making sure the get cart function is working properly', (expect)=>{

    const mockResults = [
        { id: 1, shown:3, picked:1 }, 
        { id: 3, shown:5, picked:0 }
    ];
    localStorage.setItem('POKEMON', JSON.stringify(mockResults));

    const actual = getResults();
    expect.deepEqual(mockResults, actual);
});
test('making sure the add shown inceremnts by 1', (expect)=>{

    const mockResults = [
        { id: 1, shown:3, picked:1 }, 
        { id: 3, shown:5, picked:0 }
    ];
    localStorage.setItem('POKEMON', JSON.stringify(mockResults));
    
    const mockResults2 = [
        { id: 1, shown:3, picked:2 }, 
        { id: 3, shown:5, picked:0 }
    ];
    catchPokemon(1);


    const actual = getResults();
    expect.deepEqual(mockResults2, actual);
});

