// const { default: axios } = require("axios");

const { default: axios } = require("axios");

// const { response } = require("express");


async function getPokemon(){
    const numPokemon = document.getElementById('num-pokemon').value;
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${numPokemon}`;

    const promise = await axios.get(url);

    let pokemonList = "";
    for (const pokemon of promise.data.results) {
        pokemonList += `<li>${pokemon.name}</li>`
    }
    document.querySelector('#pokemon-list').innerHTML = pokemonList
}
const button = document.querySelector('#get-pokemon');
button.addEventListener('click',getPokemon);