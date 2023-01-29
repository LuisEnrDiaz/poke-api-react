import { InitialDatesI } from '../../../infrastructure/types/pokemonType';
import { actionTypesPokemon } from './actionTypes';
import { pokeReduce } from './pokeReducer';
import { mockDate } from '../../../infrastructure/mocks/mockPokemon';
describe('Given pokemonReducer is called', () => {
    test('When loadActionCreator is called', () => {
        const state: InitialDatesI = mockDate;
        const action = {
            type: actionTypesPokemon.load,
            payload: mockDate,
        };

        const result = pokeReduce(state, action);

        expect(result).toEqual(mockDate);
    });

    test('Then addDefaultCase is called', () => {
        const state: InitialDatesI = mockDate;
        const action = {
            type: undefined,
            payload: mockDate,
        };
        const result = pokeReduce(state, action);
        expect(result).toEqual(state);
    });
});
