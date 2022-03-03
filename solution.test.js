const getBalanceByCurrencyInPeriod = require('./solution');

describe('getBalanceByCurrencyInPeriod()', () => {
  // This is an example test. Please add your own tests if needed
  it('returns the correct balance matching a category in specified period', () => {
    expect(
      getBalanceByCurrencyInPeriod(
        [
          {
            id: '11ff73b5-e771-441c-886a-498d93b5093d',
            amount: 0.1,
            cryptoCurrency: 'bitcoin',
            time: '2021-04-08T05:15:56.905Z',
          },
          {
            id: '8c3ec38d-1821-4d49-aef1-2385cb3c2b1b',
            amount: -0.2,
            cryptoCurrency: 'ethereum',
            time: '2021-04-07T21:16:57.819Z',
          },
          {
            id: 'd1c77d7c-ccda-453c-ac01-444e9d5abca3',
            amount: 2,
            cryptoCurrency: 'dogecoin',
            time: '2021-04-07T22:46:44.071Z',
          },
          {
            id: '137127ab-f523-3jao-32vv-awk34kakgkadw',
            amount: -0.5,
            cryptoCurrency: 'litecoin',
            time: '2021-04-05T01:55:16.646Z',
          },
          {
            id: 'd1c77d7c-ccda-453c-ac01-444e9d5abca3',
            amount: 1.2,
            cryptoCurrency: 'ethereum',
            time: '2021-04-07T22:46:44.071Z',
          },
          {
            id: '33k2aldk-f523-gkl4-bed3-ad338d8vjwkl',
            amount: -0.9,
            cryptoCurrency: 'dogecoin',
            time: '2021-04-05T01:55:16.646Z',
          },
        ],
        ['dogecoin', 'ethereum'],
        // ['bitcoin', 'ethereum', 'dogecoin', 'litecoin'],
        new Date('2021-04-01'),
        new Date('2021-04-30')
      )
    ).toEqual({ dogecoin: 1.1, ethereum: 1 });
  });
  
  it('returns the correct balance for both negative and positive transactions amount', () => {
    expect(
      getBalanceByCurrencyInPeriod(
        [
          {
            id: 'd1c77d7c-ccda-453c-ac01-444e9d5abca3',
            amount: 1.2,
            cryptoCurrency: 'ethereum',
            time: '2021-04-20T22:46:44.071Z',
          },
          {
            id: '8c3ec38d-1821-4d49-aef1-2385cb3c2b1b',
            amount: -0.2,
            cryptoCurrency: 'ethereum',
            time: '2021-04-07T21:16:57.819Z',
          },
          {
            id: '33k2aldk-f523-gkl4-bed3-ad338d8vjwkl',
            amount: -1.5,
            cryptoCurrency: 'ethereum',
            time: '2021-04-05T01:55:16.646Z',
          },
        ],
        ['ethereum'],
        new Date('2021-04-01'),
        new Date('2021-04-30')
      )
    ).toEqual({ ethereum: -0.5 });
  });
  
  it('returns the object with balance equals to 0 if no matched transactions were found for selected currencies', () => {
    expect(
      getBalanceByCurrencyInPeriod(
        [
          {
            id: '8c3ec38d-1821-4d49-aef1-2385cb3c2b1b',
            amount: -0.2,
            cryptoCurrency: 'ethereum',
            time: '2021-04-07T21:16:57.819Z',
          },
          {
            id: 'd1c77d7c-ccda-453c-ac01-444e9d5abca3',
            amount: 2,
            cryptoCurrency: 'dogecoin',
            time: '2021-04-07T22:46:44.071Z',
          },
          {
            id: 'd1c77d7c-ccda-453c-ac01-444e9d5abca3',
            amount: 1.2,
            cryptoCurrency: 'ethereum',
            time: '2021-04-07T22:46:44.071Z',
          },
          {
            id: '33k2aldk-f523-gkl4-bed3-ad338d8vjwkl',
            amount: -0.9,
            cryptoCurrency: 'dogecoin',
            time: '2021-04-05T01:55:16.646Z',
          },
        ],
        ['litecoin', 'bitcoin'],
        new Date('2021-04-01'),
        new Date('2021-04-30')
      )
    ).toEqual({ litecoin: 0, bitcoin: 0 });
  });
});
  