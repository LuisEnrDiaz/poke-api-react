import { PokemonsI } from '../../../../infrastructure/types/pokemonType/pokemonType';

export function PokemonItem({ item }: { item: PokemonsI }) {
    return (
        <li key={item.name}>
            <p>{item.name}</p>
            <img src={item.name} alt={item.name} />
        </li>
    );
}
