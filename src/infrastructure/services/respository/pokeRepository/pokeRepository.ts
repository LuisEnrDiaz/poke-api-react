import { InitialI, PokemonI } from '../../../types/pokemonType/pokemonType';

export class PokeRepository {
    url: string;

    constructor() {
        this.url = 'https://pokeapi.co/api/v2/pokemon';
    }

    createError(response: Response) {
        const message = `Error ${response.status} : ${response.statusText}`;
        const error = new Error(message);

        error.name = 'HTTError';
        return error;
    }

    getAll(): Promise<InitialI> {
        return fetch(this.url).then((response) => {
            if (!response.ok) {
                throw this.createError(response);
            }

            return response.json();
        });
        // .then((data) => {
        //     return data.results;
        // });
    }

    get(url: string): Promise<PokemonI> {
        return fetch(url).then((response) => {
            if (!response.ok) {
                throw this.createError(response);
            }

            return response.json();
        });
    }
}
