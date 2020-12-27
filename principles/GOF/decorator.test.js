//Decorator Design Pattern: The ability to add new behavior at runtime.
//Decorator 'wraps around' Component by maintaining a reference to it

let Book = function (name) {
    this.name = name;

    this.say = function () {
        return "Book: " + name;
    };
}

let DecoratedBook = function (book, price) {
    this.book = book;
    this.name = book.name; //interface should be the same
    this.price = price;

    this.say = function () {
        return book.say() + ", Price: $" + price;
    };
}

//------------------------------------------------------------------

test('GOF - Decorator Design Pattern', () => {
    var book = new Book("HarryPotter");
    expect(book.say()).toEqual("Book: HarryPotter");

    var decorated = new DecoratedBook(book, 100);
    expect(decorated.name).toEqual("HarryPotter");
    expect(decorated.say()).toEqual("Book: HarryPotter, Price: $100");
});