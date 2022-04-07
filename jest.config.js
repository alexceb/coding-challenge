/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    preset: 'ts-jest',
    testPathIgnorePatterns: ['<rootDir>[/\\\\](build|docs|node_modules)[/\\\\]'],
    transformIgnorePatterns: [`node_modules/(?!(@lendoab)/)`],
};
