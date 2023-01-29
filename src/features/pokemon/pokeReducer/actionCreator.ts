import { createAction } from '@reduxjs/toolkit';
import { InitialDatesI } from '../../../infrastructure/types/pokemonType';
import { actionTypesPokemon } from './actionTypes';

export const loadActionCreator = createAction<InitialDatesI>(
    actionTypesPokemon.load
);
