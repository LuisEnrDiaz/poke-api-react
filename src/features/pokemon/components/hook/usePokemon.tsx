import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PokeRepository } from '../../../../infrastructure/services/pokeRepository';
import * as action from '../../pokeReducer/actionCreator';
import { rootState } from '../../../../infrastructure/store/store';

export const usePokemon = () => {
    const pokemons = useSelector((state: rootState) => state.pokemons);
    const dispatcher = useDispatch();
    const pokemonRepository = useMemo(() => new PokeRepository(), []);

    const handleLoad = useCallback(() => {
        pokemonRepository
            .getInitialDates()
            .then((pokemons) => dispatcher(action.loadActionCreator(pokemons)));
    }, [dispatcher, pokemonRepository]);

    return {
        pokemons,
        handleLoad,
    };
};
