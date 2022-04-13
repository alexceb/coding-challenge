import type {
    BookGenre,
    Book,
    Bookmark,
    Boxart,
    MergedResourceArray, 
} from './mergeResources';
import { mergeBooksResources } from './mergeResources';

const lists: Array<BookGenre> = [
    {
        "id": 5434364,
        "name": "Fantasy"
    },
    {
        "id": 65456475,
        name: "Thrillers"
    }
];

const books: Array<Book> = [
    {
        "genreId": 65456475,
        "id": 65432445,
        "title": "How to be effective?"
    },
    {
        "genreId": 65456475,
        "id": 675465,
        "title": "Endurance"
    },
    {
        "genreId": 5434364,
        "id": 70111470,
        "title": "Harry Potter"
    },
    {
        "genreId": 5434364,
        "id": 654356453,
        "title": "Dune"
    }
];

const boxarts: Array<Boxart> = [
    { bookId: 65432445, width: 130, height:200, url:"BeingEffective130.jpg" },
    { bookId: 65432445, width: 200, height:200, url:"BeingEffective200.jpg" },
    { bookId: 675465, width: 200, height:200, url:"Endurance200.jpg" },
    { bookId: 675465, width: 120, height:200, url:"Endurance120.jpg" },
    { bookId: 675465, width: 300, height:200, url:"Endurance300.jpg" },
    { bookId: 70111470, width: 150, height:200, url:"Harry150.jpg" },
    { bookId: 70111470, width: 200, height:200, url:"Harry200.jpg" },
    { bookId: 654356453, width: 200, height:200, url:"Dune200.jpg" },
    { bookId: 654356453, width: 140, height:200, url:"Dune140.jpg" }
];

const bookmarks: Array<Bookmark> = [
    { bookId: 65432445, page: 12 },
    { bookId: 675465, page: 333 },
    { bookId: 70111470, page: 88 },
    { bookId: 654356453, page: 23 }
];

const defaultData = [lists, books, boxarts, bookmarks];

describe('Testing mergeBooksResources()', () => {
    it('returns correct data structure', () => {
        expect(
            mergeBooksResources.apply(null, defaultData)
        ).toEqual<MergedResourceArray>([
            {
                name: 'Fantasy',
                books: [
                    {
                        "id": 70111470,
                        "title": "Harry Potter",
                        "page": 88,
                        "boxart": "Harry150.jpg"
                    },
                    {
                        "id": 654356453,
                        "title": "Dune",
                        "page": 23,
                        "boxart": "Dune140.jpg"
                    }
                ],
            },
            {
                name: 'Thrillers',
                books: [
                    {
                        "id": 65432445,
                        "title": "How to be effective?",
                        "page": 12,
                        "boxart": "BeingEffective130.jpg"
                    },
                    {
                        "id": 675465,
                        "title": "Endurance",
                        "page": 333,
                        "boxart": "Endurance120.jpg"
                    },
                ],
            },
        ]);
    });
    it('books array should for each genre should be empty if no match was found', () => {
        const limitedBooks: Array<Book> = [
            {
                "genreId": 65456475,
                "id": 65432445,
                "title": "How to be effective?"
            },
            {
                "genreId": 65456475,
                "id": 675465,
                "title": "Endurance"
            },
        ];
        expect(mergeBooksResources(lists, limitedBooks, boxarts, bookmarks))
            .toEqual<MergedResourceArray>([
                {
                    name: 'Fantasy',
                    books: [],
                },
                {
                    name: 'Thrillers',
                    books: [
                        {
                            "id": 65432445,
                            "title": "How to be effective?",
                            "page": 12,
                            "boxart": "BeingEffective130.jpg"
                        },
                        {
                            "id": 675465,
                            "title": "Endurance",
                            "page": 333,
                            "boxart": "Endurance120.jpg"
                        }
                    ],
                },
            ]);
    })
});
