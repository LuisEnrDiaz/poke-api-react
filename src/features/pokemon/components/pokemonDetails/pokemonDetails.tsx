import { useCallback, useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { PokeRepository } from '../../../../infrastructure/services/pokeRepository';
import { PokemonI } from '../../../../infrastructure/types/pokemonType';
import { Decoration } from '../decoration/decoration';
import style from './pokemonDetails.module.css';

function PokemonDetails() {
    const { name } = useParams();

    const initialUrl = 'https://pokeapi.co/api/v2/pokemon';
    const url = `${initialUrl}/${name}`;

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

    useEffect(() => {
        fetchPokemon();
    }, [fetchPokemon]);

    return (
        <main>
            <Decoration />

            <Link to={'/'}>
                <button className={style.button}>Volver</button>
            </Link>

            <section className={style.section}>
                <section className={style.section_section}>
                    <img
                        className={style.section_img}
                        src={pokemon.sprites.front_default}
                        alt={`imagen pixelada de ${pokemon.name} de frente`}
                    />
                    <img
                        className={style.section_img}
                        src={pokemon.sprites.back_default}
                        alt={`imagen pixelada de ${pokemon.name} de espalda`}
                    />
                </section>

                <p className={style.section_name}>{pokemon.name}</p>

                <ul className={style.section_ul}>
                    {pokemon.stats.map((e) => (
                        <li className={style.section_ul_li}>
                            <p className={style.section_ul_li_container_stats}>
                                {e.stat.name} :
                            </p>
                            <p
                                className={`${style.section_ul_li_container_stats} ${style.color_text}`}
                            >
                                {e.base_stat}
                            </p>
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    );
}

export default PokemonDetails;
