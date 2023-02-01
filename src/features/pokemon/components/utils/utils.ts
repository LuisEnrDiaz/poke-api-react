import { useCallback, useMemo, useState } from 'react';
import { PokeRepository } from '../../../../infrastructure/services/pokeRepository';
import { PokemonI } from '../../../../infrastructure/types/pokemonType';

export function Utils(url: string) {
    const initialState: PokemonI = {
        id: 0,
        name: '',
        sprites: {
            front_default: '',
            back_default: '',
        },
        stats: [
            {
                base_stat: 0,
                stat: {
                    name: '',
                },
            },
        ],
    };

    const [pokemon, setPokemon] = useState(initialState);
    const pokeRepo = useMemo(() => new PokeRepository(), []);

    const fetchPokemon = useCallback(() => {
        const get = async () => {
            const promise = await pokeRepo.getPokemon(url);

            setPokemon(promise);
        };
        return get();
    }, [pokeRepo, url]);

    return {
        fetchPokemon,
        pokemon,
        setPokemon,
    };
}
