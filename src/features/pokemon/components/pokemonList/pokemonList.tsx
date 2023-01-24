import { useEffect } from 'react';
import { PokemonsI } from '../../../../infrastructure/types/pokemonType';
import { usePokemon } from '../hook/usePokemon';
import { PokemonItem } from '../pokemonItem/pokemonItem';

export function PokemonList() {
    const { handleLoad, pokemons } = usePokemon();

    useEffect(() => {
        handleLoad();
    }, [handleLoad]);

    return (
        <>
            <div>
                {pokemons.results.map((item: PokemonsI) => (
                    <ul key={item.name}>
                        <PokemonItem item={item}></PokemonItem>
                    </ul>
                ))}
            </div>
        </>
    );
}
