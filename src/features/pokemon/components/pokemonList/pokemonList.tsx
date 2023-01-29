import { useEffect } from 'react';
import { PokemonsI } from '../../../../infrastructure/types/pokemonType';
import { usePokemon } from '../hook/usePokemon';
import { PokemonItem } from '../pokemonItem/pokemonItem';
import style from './pokemonList.module.css';

export function PokemonList() {
    const { handleLoad, pokemons } = usePokemon();

    const title = 'Lista de Pokemons';

    useEffect(() => {
        handleLoad();
    }, [handleLoad]);

    return (
        <main>
            <div className={style.main_decoration}>
                <div className={style.main_decoration_div}>
                    <div className={style.main_decoration_div_div}></div>
                </div>
            </div>

            <section className={style.main_section}>
                <h2>{title}</h2>

                <ul className={style.main_section_ul}>
                    {pokemons.results.map((pokemon: PokemonsI) => (
                        <PokemonItem
                            key={pokemon.name}
                            name={pokemon.name}
                        ></PokemonItem>
                    ))}
                </ul>
            </section>
        </main>
    );
}
