import { createAction } from '@reduxjs/toolkit';
import { InitialI } from '../../../infrastructure/types/pokemonType/pokemonType';
import { actionTypesPokemon } from './actionTypes';

export const loadActionCreator = createAction<InitialI>(
    actionTypesPokemon.load
);
