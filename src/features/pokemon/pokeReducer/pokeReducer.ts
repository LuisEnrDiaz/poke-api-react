import { createReducer } from '@reduxjs/toolkit';
import * as action from './actionCreator';
import { InitialI } from '../../../infrastructure/types/pokemonType';

const initialState: InitialI = {
    count: 0,
    next: '',
    previous: '',
    results: [],
};

export const pokemonReducer = createReducer(initialState, (builder) => {
    builder.addCase(
        action.loadActionCreator,
        (state, action) => action.payload
    );

    builder.addDefaultCase((state) => state);
});
