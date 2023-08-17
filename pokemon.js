// import { default as axios } from "axios";



function getPokemon() {
    const numPokemon = document.querySelector('#num-pokemon').value;
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${numPokemon}`;

    axios.get(url).then(response => {
        let pokemonList = "";
        for (const pokemon of response.data.results) {
            pokemonList += `<li>${pokemon.name}</li>`;
        }
        document.querySelector('#pokemon-list').innerHTML = pokemonList;
    });
    }

const button = document.querySelector('#get-pokemon');
button.addEventListener('click',getPokemon)


// const queryString = new URLSearchParams({ offset: 200, limit:10}).toString();

// const url = `https://pokeapi.co/api/v2/pokemon?${queryString}`;

async function f() {
    const pokemon = await axios.get('https://pokeapi.co/api/v2/pokemon');
    console.log(pokemon.data.results)
}
