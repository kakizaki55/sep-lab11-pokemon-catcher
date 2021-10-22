// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { getPokedex, catchPokemon, seenPokemon, setPokedex } from '../utils.js';

const test = QUnit.test;

test('making sure the getPokemon function is working properly', (expect)=>{

    const mockResults = [
        { id: 1, shown:3, catch:1 }, 
        { id: 3, shown:5, catch:0 }
    ];
    localStorage.setItem('POKEMON', JSON.stringify(mockResults));

    const actual = getPokedex();
    expect.deepEqual(actual, mockResults);
});

test('making sure the add catch inceremnts by 1', (expect)=>{
    localStorage.removeItem('POKEMON');
    const mockResults = [
        { id: 1, shown:3, catch:1 }, 
        { id: 3, shown:5, catch:0 }
    ];
    localStorage.setItem('POKEMON', JSON.stringify(mockResults));
    
    const expected = [
        { id: 1, shown:3, catch:2 }, 
        { id: 3, shown:5, catch:0 }
    ];
    catchPokemon(1);

    const actual = getPokedex();
    
    expect.deepEqual(actual, expected);
});

test('making sure the add shown inceremnts by 1', (expect)=>{
    localStorage.removeItem('POKEMON');
    const mockResults = [
        { id: 1, shown:3, catch:1 }, 
        { id: 3, shown:5, catch:0 }
    ];
    localStorage.setItem('POKEMON', JSON.stringify(mockResults));
    
    const expected = [
        { id: 1, shown:4, catch:1 }, 
        { id: 3, shown:5, catch:0 }
    ];
    seenPokemon(1);

    const actual = getPokedex();
    
    expect.deepEqual(actual, expected);
});

test('making setPokedex is working well', (expect) =>{
    const expected = [
        { id: 1, shown:3, catch:1 }, 
        { id: 3, shown:5, catch:0 }
    ];
    setPokedex(expected);
    const actual = getPokedex();
    expect.deepEqual(actual, expected);

});
