import { InitialDatesI, PokemonI } from '../types/pokemonType';

export class PokeRepository {
    url: string;

    constructor() {
        this.url = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0';
    }

    createError(response: Response) {
        const message = `Error ${response.status} : ${response.statusText}`;
        const error = new Error(message);

        error.name = 'HTTError';
        return error;
    }

    getInitialDates(url: string): Promise<InitialDatesI> {
        return fetch(url).then((response) => {
            if (!response.ok) {
                throw this.createError(response);
            }

            return response.json();
        });
    }

    // getPage(url: string): Promise<PokemonI> {
    //     return fetch(url).then((response) => {
    //         if (!response.ok) {
    //             throw this.createError(response);
    //         }
    //         return response.json();
    //     });
    // }

    getPokemon(url: string): Promise<PokemonI> {
        return fetch(url).then((response) => {
            if (!response.ok) {
                throw this.createError(response);
            }
            return response.json();
        });
    }
}
