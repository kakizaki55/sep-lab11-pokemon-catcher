// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { getResults, catchPokemon } from '../utils.js';

const test = QUnit.test;
const skip = QUnit.skip;


test('making sure the get cart function is working properly', (expect)=>{

    const mockResults = [
        { id: 1, shown:3, catch:1 }, 
        { id: 3, shown:5, catch:0 }
    ];
    localStorage.setItem('POKEMON', JSON.stringify(mockResults));

    const actual = getResults();
    console.log(actual);
    expect.deepEqual(mockResults, actual);
});
skip('making sure the add shown inceremnts by 1', (expect)=>{
    localStorage.removeItem('POKEMON');
    const mockResults = [
        { id: 1, shown:3, catch:1 }, 
        { id: 3, shown:5, catch:0 }
    ];
    localStorage.setItem('POKEMON', JSON.stringify(mockResults));
    
    const mockResults2 = [
        { id: 1, shown:3, catch:2 }, 
        { id: 3, shown:5, catch:0 }
    ];
    // console.log(mockResults2);
    catchPokemon(1);
    const actual = getResults();
    expect.deepEqual(mockResults2, actual);
});

