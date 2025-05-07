const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
const track = require('../api/track');

const mock = new MockAdapter(axios);

describe('track()', () => {
    it('should return tx data from the API', async () => {
        const fakeResponse = { status: 'Success', gasUsed: '21000' };
        mock.onGet(/track/).reply(200, fakeResponse);

        const result = await track("0xabc123");
        expect(result).toEqual(fakeResponse);
    });

    it('should throw if the API fails', async () => {
        mock.onGet(/track/).reply(500);
        await expect(track("0xabc123")).rejects.toThrow();
    });
});
