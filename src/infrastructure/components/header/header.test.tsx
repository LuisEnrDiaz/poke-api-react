import { render, screen } from '@testing-library/react';
import { Header } from './header';

describe('Given Header', () => {
    describe('When we render the component', () => {
        test('Then it should display "Pokemon"', () => {
            render(<Header />);
            const result = screen.getByText(/Pokemon/i);
            expect(result).toBeInTheDocument();
        });
    });
});
