import { InitialI, PokemonI } from '../../types/pokemonType/pokemonType';

export interface Repository {
    getAll: () => Promise<InitialI>;
    get?: (url: string) => Promise<PokemonI>;
}
