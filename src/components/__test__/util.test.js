import { getIcon } from '../../utils';

describe('get icon className', () => {
    test('should get className ', () => {
        const weatherIcon = getIcon(800);
        expect(weatherIcon).toEqual('wi-day-sunny');
    });
});
