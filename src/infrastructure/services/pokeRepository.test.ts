import { errorResponse } from '../mocks/mockErrorPokeRepository';
import { PokeRepository } from './pokeRepository';

describe('Given PokeRepository', () => {
    let services: PokeRepository;

    beforeEach(() => {
        services = new PokeRepository();
    });

    describe('When createError is called', () => {
        test('Then should return error', () => {
            const error = services.createError(
                new Response('Error', {
                    status: 400,
                    statusText: 'error',
                })
            );
            const result = new Error('Error 400 : error');

            expect(error).toEqual(result);
        });
    });

    describe('When getInitialDates is called', () => {
        test('Then should return InitialDates', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue({}),
            });
            const result = await services.getInitialDates('');

            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual({});
        });

        test('Then should return error', async () => {
            global.fetch = jest.fn().mockResolvedValue(errorResponse);
            await expect(
                async () => await services.getInitialDates('')
            ).rejects.toThrow();
        });
    });

    describe('When getPokemon is called', () => {
        test('Then should return pokemon', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue({}),
            });
            const result = await services.getPokemon('');
            expect(result).toEqual({});
        });

        test('Then should return error', async () => {
            global.fetch = jest.fn().mockResolvedValue(errorResponse);
            await expect(
                async () => await services.getPokemon('')
            ).rejects.toThrow();
        });
    });
});
