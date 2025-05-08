const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
const getWaitStatus = require('../api/status');

const mock = new MockAdapter(axios);

describe('getWaitStatus()', () => {
    afterEach(() => mock.reset());

    it('should return job status from API (single fetch)', async () => {
        const jobId = 'job123';
        const mockResponse = { status: 'pending', jobId };
        mock.onGet(/wait/).reply(200, mockResponse);

        const result = await getWaitStatus(jobId);
        expect(result).toEqual(mockResponse);
    });

    it('should poll until status is confirmed', async () => {
        const jobId = 'job123';
        const responses = [
            { status: 'pending' },
            { status: 'pending' },
            { status: 'confirmed' }
        ];

        let callCount = 0;
        mock.onGet(/wait/).reply(() => [200, responses[callCount++]]);

        const result = await getWaitStatus(jobId, {
            poll: true,
            interval: 10,
            timeout: 1000
        });

        expect(result.status).toBe('confirmed');
    });

    it('should timeout if job never resolves', async () => {
        const jobId = 'jobFail';
        mock.onGet(/wait/).reply(200, { status: 'pending' });

        await expect(
            getWaitStatus(jobId, { poll: true, interval: 10, timeout: 30 })
        ).rejects.toThrow('Polling timed out');
    });
});
