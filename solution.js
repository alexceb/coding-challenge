/*
    You application fetches crypto currencies transactions data of user crypto wallet.
    The task is to implement the function that will calculate the total balance for selected crypto currencies within selected time period.

    Function accepts:
        - transaction data which is array
        - array of currencies to query from
        - start date
        - end date

    Function should return the key/value pair for each currency from the input
    {
        [cryptoCurrency]: balanceAmount
    }
*/

/*
    Example of the function call:
    const balance = getBalanceByCurrencyInPeriod(
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
            
                id: '33k2aldk-f523-gkl4-bed3-ad338d8vjwkl',
                amount: -1.5,
                cryptoCurrency: 'ethereum',
                time: '2021-04-05T01:55:16.646Z',
            },
        ],
        ['ethereum'],
        new Date('2021-04-01'),
        new Date('2021-04-30')
    );

    console.log(balance) // { ethereum: -0.5 }
*/

/**
 * 
 * @param {{
 *  id: string,
 *  amount: number,
 *  cryptoCurrency: string,
 *  time: string,
 * }} transactions 
 * @param {String[]} currencies 
 * @param {Date} start 
 * @param {Date} end 
 * @returns {Object}
 */

const getBalanceByCurrencyInPeriod = (
    transactions,
    currencies,
    start,
    end
) => {
    // Add your code below
};

module.exports = getBalanceByCurrencyInPeriod;
