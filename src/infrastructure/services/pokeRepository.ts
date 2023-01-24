import { InitialI } from '../types/pokemonType';

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

    getAllPokemons(): Promise<InitialI> {
        return fetch(this.url).then((response) => {
            if (!response.ok) {
                throw this.createError(response);
            }

            return response.json();
        });
    }
}
