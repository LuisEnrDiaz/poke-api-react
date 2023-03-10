import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { PokeRepository } from '../../../../infrastructure/services/pokeRepository';
import { appStore } from '../../../../infrastructure/store/store';
import { PokemonItem } from './pokemonItem';

describe('Given PokemonItem', () => {
    describe('When we render the component', () => {
        test('Then it should display', async () => {
            render(
                <Provider store={appStore}>
                    <PokemonItem url=""></PokemonItem>
                </Provider>
            );
            const service = new PokeRepository();
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue({}),
            });

            const result = await service.getPokemon('');

            const element = screen.getByAltText('pokemon');
            expect(element).toBeInTheDocument();
            expect(result).toEqual({});
        });
    });
});
