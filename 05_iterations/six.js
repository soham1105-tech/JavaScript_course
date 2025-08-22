const books = [
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925, rating: 4.2, genre: 'Fiction' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960, rating: 4.3, genre: 'Fiction' },
    { title: '1984', author: 'George Orwell', year: 1949, rating: 4.4, genre: 'Dystopian' },
    { title: 'Pride and Prejudice', author: 'Jane Austen', year: 1813, rating: 4.5, genre: 'Romance' },
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951, rating: 3.9, genre: 'Fiction' },
    { title: 'The Hobbit', author: 'J.R.R. Tolkien', year: 1937, rating: 4.7, genre: 'Fantasy' },
    { title: 'Fahrenheit 451', author: 'Ray Bradbury', year: 1953, rating: 4.1, genre: 'Dystopian' },
    { title: 'Sherlock Holmes', author: 'Arthur Conan Doyle', year: 1892, rating: 4.6, genre: 'Mystery' },
    { title: 'The Alchemist', author: 'Paulo Coelho', year: 1988, rating: 3.8, genre: 'Adventure' },
    { title: 'The American Psychopath', author: 'Bret Easton Ellis', year: 1991, rating: 3.7, genre: 'Horror' }
]

const userBooks = books.filter( (bk) => bk.genre === 'Fiction' && bk.year >= 1950 );
console.log(userBooks);
