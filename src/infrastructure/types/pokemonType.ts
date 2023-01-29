export type PokemonsI = {
    name: string;
    url: string;
};

export type InitialDatesI = {
    count: number;
    next: string | null;
    previous: string | null;
    results: PokemonsI[];
};

export type PokemonI = {
    id: number;
    name: string;
    sprites: { front_default: string; back_default: string };
    stats: [
        {
            base_stat: number;
            stat: {
                name: string;
            };
        }
    ];
};
