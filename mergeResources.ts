/* We have 4 separate arrays: genre list, books, boxarts list with image urls and bookmarks.
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
        "genreId": 5434364,
        "id": 65432445,
        "title": "How to be effective?"
    },
    {
        "genreId": 5434364,
        "id": 675465,
        "title": "Endurance"
    },
    {
        "genreId": 65456475,
        "id": 70111470,
        "title": "Harry Potter"
    },
    {
        "genreId": 65456475,
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
*/

// We want to build an array of genre objects, each with a name and a books array.
// The result array will contain the book's id, title, bookmark page, and smallest boxart url. 
// Check the Typescript signature below.
// In other words we want to build the following structure:

/*
[
    ...
	{
		"name": "Fantasy",
		"videos": [
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
		]
	},
    ...
]
*/

// Describes book genre
type BookGenre = {
    id: number;
    name: string;
}

// Book entity
type Book = {
    genreId: BookGenre['id'];
    id: number;
    title: string;
}

// Represent the properties of the boxart of the book on the webpage
type Boxart = {
    bookId: Book['id'];
    width: number;
    height: number;
    url: string;
}

// Show the user's book reading progress
type Bookmark = {
    bookId: Book['id'],
    page: number;
}

type MergedResourceArray = Array<{
    name: BookGenre['name'];
    videos: Array<{
        id: Book['id'];
        title: Book['title'];
        page: Bookmark['page'];
        boxart: Boxart['url'];
    }>
}>

const mergeBooksResources = (
    genreList: Array<BookGenre>,
    books: Array<Book>,
    boxarts: Array<Boxart>,
    bookmarks: Array<Bookmark>,
): MergedResourceArray | void => {
    // Add your code below
}

module.exports = mergeBooksResources;
