import { InitialDatesI, PokemonI } from '../types/pokemonType';

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

    getInitialDates(): Promise<InitialDatesI> {
        return fetch(this.url).then((response) => {
            if (!response.ok) {
                throw this.createError(response);
            }

            return response.json();
        });
    }

    getPokemon(name: string): Promise<PokemonI> {
        return fetch(`${this.url}/${name}`).then((response) => {
            if (!response.ok) {
                throw this.createError(response);
            }
            return response.json();
        });
    }
}
