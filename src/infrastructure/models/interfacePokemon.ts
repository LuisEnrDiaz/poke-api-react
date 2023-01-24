import { InitialI } from '../types/pokemonType';

export interface Repository {
    getAll: () => Promise<InitialI>;
}
