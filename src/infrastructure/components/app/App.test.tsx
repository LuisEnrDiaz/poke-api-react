import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { appStore } from '../../store/store';

test('renders learn react link', () => {
    render(
        <Provider store={appStore}>
            <App></App>
        </Provider>
    );
    const result = screen.getByText(/Lista de pokemons/i);
    expect(result).toBeInTheDocument();
});
