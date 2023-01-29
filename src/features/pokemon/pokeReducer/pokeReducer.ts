import { createReducer } from '@reduxjs/toolkit';
import * as action from './actionCreator';
import { InitialDatesI } from '../../../infrastructure/types/pokemonType';

const initialState: InitialDatesI = {
    count: 0,
    next: '',
    previous: '',
    results: [],
};

export const pokeReduce = createReducer(initialState, (builder) => {
    builder.addCase(
        action.loadActionCreator,
        (state, action) => action.payload
    );

    builder.addDefaultCase((state) => state);
});
