import React, {useEffect, useState} from 'react';
import getAllPokemons from "./api/getAllPokemons";
import getPokemon from "./api/getPokemon";
import {
    Pokemon,
    PokemonAbility,
    PokemonAbilityAttribute,
    pokemonDefaultOptions,
    PokemonMove,
    PokemonStat,
    PokemonType
} from "./models/Pokemon";

export default () => {
    const [pokemons, setPokemons] = useState([new Pokemon(pokemonDefaultOptions)]);

    useEffect(() => {
        getAllPokemons()
            .then((response) => response.json())
            .then(async (response) => {
                let _pokemons = [];

                for (const pokemon of response.results) {
                    let _pokemonData = await getPokemon(pokemon.name);

                    if (_pokemonData.status === 200) {
                        _pokemonData = await _pokemonData.json();

                        const _pokemon = new Pokemon({
                            name: _pokemonData.name,
                            id: _pokemonData.id,
                            baseExperience: _pokemonData.base_experience,
                            height: _pokemonData.height,
                            stats: _pokemonData.stats.map(stat => new PokemonStat({
                                baseStat: stat.base_stat,
                                effort: stat.effort,
                                stat: stat.stat,
                            })),
                            moves: _pokemonData.moves.map(move => new PokemonMove({
                                name: move.move.name,
                                url: move.move.url
                            })),
                            types: _pokemonData.types.map(type => new PokemonType({
                                name: type.type.name,
                                url: type.type.url,
                            })),
                            abilities: _pokemonData.abilities.map(ability => new PokemonAbility({
                                ability: new PokemonAbilityAttribute({
                                    name: ability.ability.name,
                                    url: ability.ability.url
                                }),
                                isHidden: ability.is_hidden,
                                slot: ability.slot,
                            })),
                        });

                        _pokemons.push(_pokemon)
                    }
                }

                setPokemons(_pokemons);
            });
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                {pokemons.map((pokemon) => (
                    <div style={{background: "rgba(200, 200, 200, 1.0)"}}>
                        <h1>{pokemon.name}</h1>

                        <ul>{pokemon.abilities.map((ability) => <ol>
                            {ability.ability.name}</ol>)}
                        </ul>
                    </div>
                ))}
            </header>
        </div>
    );
}
