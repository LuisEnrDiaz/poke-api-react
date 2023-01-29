import { useCallback, useEffect, useMemo, useState } from 'react';
import { PokeRepository } from '../../../../infrastructure/services/pokeRepository';
import { PokemonI } from '../../../../infrastructure/types/pokemonType';
import style from './pokemonItem.module.css';

export function PokemonItem({ name }: { name: string }) {
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
            const promise = await pokeRepo.getPokemon(name);

            setPokemon(promise);
        };
        return get();
    }, [pokeRepo, name]);

    useEffect(() => {
        fetchPokemon();
    }, [fetchPokemon]);

    return (
        <>
            {pokemon ? (
                <li className={style.list} key={pokemon.id}>
                    <div className={style.list_section_img}>
                        <img
                            className={style.list_img_bottom}
                            src="./assets/bosque.png"
                            alt=""
                        />
                        <img
                            className={style.list_img_pokemon}
                            src={pokemon.sprites.front_default}
                            alt={`pokemon ${pokemon.name}`}
                        />
                    </div>
                    <h2 className={style.list_section_h2}>{pokemon.name}</h2>
                </li>
            ) : (
                <p>Loading...</p>
            )}
        </>
    );
}
