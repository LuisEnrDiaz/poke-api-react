import { PokemonsI } from '../../../../infrastructure/types/pokemonType';

export function PokemonItem({ item }: { item: PokemonsI }) {
    return (
        <li key={item.name}>
            <a href={item.url}>
                <p>{item.name}</p>
            </a>
        </li>
    );
}
