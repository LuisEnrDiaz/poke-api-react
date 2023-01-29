import { configureStore } from '@reduxjs/toolkit';
import { pokeReduce } from '../../features/pokemon/pokeReducer/pokeReducer';

export const appStore = configureStore({
    reducer: {
        pokemons: pokeReduce,
    },
});

export type rootStore = typeof appStore;

export type rootState = ReturnType<typeof appStore.getState>;
