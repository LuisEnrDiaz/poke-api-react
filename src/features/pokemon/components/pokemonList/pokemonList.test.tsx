import { fireEvent, render, screen } from '@testing-library/react';
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

            const title = screen.getByText(/Lista de Pokemons/i);
            const buttonPrevious = screen.getByRole('button', {
                name: 'Atras',
            });
            const buttonNext = screen.getByRole('button', {
                name: 'Siguiente',
            });

            const previous = fireEvent.click(buttonPrevious);
            const next = fireEvent.click(buttonNext);

            expect(title).toBeInTheDocument();
            expect(previous).toBe(false);
            expect(next).toBe(false);
        });
    });
});
