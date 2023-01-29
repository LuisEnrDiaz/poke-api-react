import { useEffect, SyntheticEvent, useState } from 'react';
import { PokemonsI } from '../../../../infrastructure/types/pokemonType';
import { usePokemon } from '../hook/usePokemon';
import { PokemonItem } from '../pokemonItem/pokemonItem';
import style from './pokemonList.module.css';

export function PokemonList() {
    const { handleLoad, pokemons } = usePokemon();

    const title = 'Lista de Pokemons';
    const initialState = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0';

    const [page, setPage] = useState(initialState);

    const handleClick = (event: SyntheticEvent) => {
        event.preventDefault();

        const element = event.target as HTMLButtonElement;
        setPage(element.name);
        handleLoad(page);
    };

    useEffect(() => {
        handleLoad(page);
    }, [handleLoad, page]);

    return (
        <main>
            <div className={style.main_decoration}>
                <div className={style.main_decoration_div}>
                    <div className={style.main_decoration_div_div}></div>
                </div>
            </div>

            <section className={style.main_section_info}>
                <h2>{title}</h2>

                {pokemons.previous === null ? (
                    <></>
                ) : (
                    <button
                        className={style.section_button}
                        onClick={handleClick}
                        name={pokemons.previous}
                    >
                        Atras
                    </button>
                )}

                {pokemons.next === null ? (
                    <></>
                ) : (
                    <button
                        className={style.section_button}
                        onClick={handleClick}
                        name={pokemons.next}
                    >
                        Siguiente
                    </button>
                )}
            </section>

            <section className={style.main_section_pokemon}>
                <ul className={style.main_section_ul}>
                    {pokemons.results.map((pokemon: PokemonsI) => (
                        <PokemonItem url={pokemon.url}></PokemonItem>
                    ))}
                </ul>
            </section>
        </main>
    );
}
