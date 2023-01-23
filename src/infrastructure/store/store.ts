import { configureStore } from '@reduxjs/toolkit';
import { pokemonReducer } from '../../features/pokemon/pokeReducer/pokeReducer';

export const appStore = configureStore({
    reducer: {
        pokemons: pokemonReducer,
    },
});

export type rootStore = typeof appStore;

export type rootState = ReturnType<typeof appStore.getState>;
