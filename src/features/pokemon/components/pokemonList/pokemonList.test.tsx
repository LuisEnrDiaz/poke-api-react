import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { appStore } from '../../../../infrastructure/store/store';
import { PokemonList } from './pokemonList';

describe('Given PokemonList component', () => {
    describe('When we render the component', () => {
        test('Then it should display pokemons', () => {
            render(
                <Provider store={appStore}>
                    <PokemonList></PokemonList>
                </Provider>
            );

            const element = screen.getByText(/Pokemon list/i);

            expect(element).toBeInTheDocument();
        });
    });
});
