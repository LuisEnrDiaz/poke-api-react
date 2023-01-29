import { appStore } from './store';

describe('Given appStore is called', () => {
    test('Then it should exist', () => {
        expect(appStore).toHaveProperty('dispatch');
    });
});
