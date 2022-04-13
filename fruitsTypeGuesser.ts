type FruitItem = {
    id: number;
    countryOfOrigin: string;
    weight: number;
    type?: string;
}

/* 
    Fruits-sorting machine requires each fruit to have type
    Some of fruits were not scanned properly and are missing type parameter
    Create function that will identify the type of the fruit and enhnace the initial data based on the logic described below
    Type might be similar if:
    - it's coming from the same country
    - the difference in weight is not greater than 50 gramms
    - if it fitts more than 1 type of the fruit, use the with the smalles weight difference

    Input example:

    const items: Array<FruitItem> = [
        {
            id: 12412321,
            countryOfOrigin: 'MD',
            weight: 90,
            type: 'apple'
        },
        {
            id: 21513133,
            countryOfOrigin: 'MD',
            weight: 45,
        },
        {
            id: 23521252,
            countryOfOrigin: 'MD',
            weight: 70,
            type: 'apricot',
        },
        {
            id: 62324435,
            countryOfOrigin: 'UK',
            weight: 50,
            type: 'pear'
        },
        {
            id: 94817355,
            countryOfOrigin: 'UK',
            weight: 190,
        },
        {
            id: 36503123,
            countryOfOrigin: 'UK',
            weight: 220,
            type: 'grape',
        },
    ];

    The function should return this enhance version:
    
    const items: Array<FruitItem> = [
        {
            id: 12412321,
            countryOfOrigin: 'MD',
            weight: 90,
            type: 'apple'
        },
        {
            id: 21513133,
            countryOfOrigin: 'MD',
            weight: 45,
            type: 'apricot',
        },
        {
            id: 23521252,
            countryOfOrigin: 'MD',
            weight: 70,
            type: 'apricot',
        },
        {
            id: 62324435,
            countryOfOrigin: 'UK',
            weight: 50,
            type: 'pear'
        },
        {
            id: 94817355,
            countryOfOrigin: 'UK',
            weight: 190,
            type: 'grape',
        },
        {
            id: 36503123,
            countryOfOrigin: 'UK',
            weight: 220,
            type: 'grape',
        },
    ];

*/

export const enhanceFruitData = (
    input: Array<FruitItem>
): Array<FruitItem> | void => {
    // Add your code below
}
