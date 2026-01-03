// 1️⃣ Array Filtering and Mapping
interface IPerson {
  name: string;
  age: number;
  gender: "Male" | "Female";
}

const people: IPerson[] = [
  { name: "Alice", age: 28, gender: "Female" },
  { name: "Era", age: 28, gender: "Female" },
  { name: "Aren", age: 28, gender: "Male" },
  { name: "Bruce", age: 28, gender: "Male" },
  { name: "Shelina", age: 28, gender: "Female" },
];

const peopleFilter = (people: IPerson[]): string[] => {
  return people
    .filter(person => person.gender !== "Female")
    .map(person => person.name);
};

console.log("1️⃣ Filtered People Names:", peopleFilter(people));


// 2️⃣ Object Manipulation
interface IBook {
  title: string;
  author: string;
  year: number;
}

const books: IBook[] = [
  { title: "Clean Code", author: "Robert C. Martin", year: 2008 },
  { title: "You Don't Know JS", author: "Kyle Simpson", year: 2015 },
  { title: "Atomic Habits", author: "James Clear", year: 2018 },
];

const getBookTitles = (books: IBook[]): string[] => {
  return books.map(book => book.title);
};

console.log("2️⃣ Book Titles:", getBookTitles(books));


// 3️⃣ Function Composition
const square = (num: number): number => num * num;
const double = (num: number): number => num * 2;
const addFive = (num: number): number => num + 5;

const composedFunction = (num: number): number => {
  return addFive(double(square(num)));
};

console.log("3️⃣ Composed Function Result :", composedFunction(3));


// 4️⃣ Sorting Objects
interface ICar {
  make: string;
  model: string;
  year: number;
}

const cars: ICar[] = [
  { make: "Toyota", model: "Corolla", year: 2018 },
  { make: "Tesla", model: "Model 3", year: 2022 },
  { make: "BMW", model: "X5", year: 2016 },
  { make: "Honda", model: "Civic", year: 2020 },
];

const sortCarsByYear = (cars: ICar[]): ICar[] => {
  return [...cars].sort((a, b) => a.year - b.year);
};

console.log("4️⃣ Cars Sorted by Year:", sortCarsByYear(cars));


// 5️⃣ Find and Modify
const updateAgeByName = (
  people: IPerson[],
  targetName: string,
  newAge: number
): IPerson[] => {
  const person = people.find(p => p.name === targetName);

  if (person) {
    person.age = newAge;
  }

  return people;
};

console.log("5️⃣ Updated People Array:", updateAgeByName(people, "Aren", 32));


// 6️⃣ Array Reduction
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumEvenNumbers = (nums: number[]): number => {
  const evenNumbers = nums.filter(num => num % 2 === 0);
  const sum = evenNumbers.reduce((acc, curr) => acc + curr, 0);
  return sum;
};

console.log("6️⃣ Sum of Even Numbers:", sumEvenNumbers(numbers));


// 7️⃣ Unique Values
const numbersWithDuplicates: number[] = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7];

const getUniqueNumbers = (nums: number[]): number[] => {
  return Array.from(new Set(nums));
};

console.log("7️⃣ Unique Numbers:", getUniqueNumbers(numbersWithDuplicates));
