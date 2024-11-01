// Problem -- 1
{
  interface Person {
    name: string;
    age: number;
    gender: string;
  }

  const people: Person[] = [
    { name: "John", age: 25, gender: "male" },
    { name: "Jane", age: 22, gender: "female" },
    { name: "Habib", age: 20, gender: "male" },
    { name: "Emily", age: 27, gender: "female" },
  ];

  const filterAndMap = (persons: Person[]) => {
    return persons
      .filter((person) => person.gender !== "female")
      .map((person) => person.name);
  };

  const result = filterAndMap(people);
  console.log(result);
}

/**
 * 2.Task: Object Manipulation
 * Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.
 */
{
  interface Book {
    title: string;
    author: string;
    year: number;
  }

  const books: Book[] = [
    { title: "Book One", author: "Author One", year: 2001 },
    { title: "Book Two", author: "Author Two", year: 2002 },
    { title: "Book Three", author: "Author Three", year: 2003 },
  ];

  const getBookTitles = (books: Book[]) => {
    return books.map((book) => book.title);
  };

  console.log(getBookTitles(books));
}

/**
 * 3.Task: Function Composition
 *Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.
 */
{
  const makeSquare = (num: number) => num * num;
  const makeDouble = (num: number) => num * 2;
  const addFive = (num: number) => num + 5;

  const compose = (num: number) => addFive(makeDouble(makeSquare(num)));
  console.log(compose(5));
}

/**
 * 4.Task: Sorting Objects
 * Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.
 */
{
  interface Car {
    make: string;
    model: string;
    year: number;
  }

  const cars: Car[] = [
    { make: "Toyota", model: "Corolla", year: 2010 },
    { make: "Honda", model: "Civic", year: 2005 },
    { make: "Ford", model: "Focus", year: 2018 },
  ];

  const sortByYear = (cars: Car[]) => {
    return cars.sort((a, b) => a.year - b.year);
  };
  console.log(sortByYear(cars));
}

/**
 * 5.Task: Find and Modify
 * Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array.
 */
{
  interface Person {
    name: string;
    age: number;
    gender: string;
  }

  const people: Person[] = [
    { name: "John", age: 25, gender: "male" },
    { name: "Jane", age: 22, gender: "female" },
    { name: "Habib", age: 20, gender: "male" },
    { name: "Emily", age: 27, gender: "female" },
  ];

  const findAndModifyAge = (name: string, age: number) => {
    const person = people.find((person) => person.name === name);
    if (person) {
      person.age = age;
    }
    return people;
  };

  console.log(findAndModifyAge("John", 30));
}
