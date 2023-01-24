import { createAction } from '@reduxjs/toolkit';
import { InitialI, PokemonI } from '../../../infrastructure/types/pokemonType';
import { actionTypesPokemon } from './actionTypes';

export const loadActionCreator = createAction<InitialI>(
    actionTypesPokemon.load
);

export const getActionCreator = createAction<PokemonI>(actionTypesPokemon.get);
