export default async (pokemonName = "") => await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)