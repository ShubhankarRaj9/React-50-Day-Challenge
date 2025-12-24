// Strings
let myName: string = "HuXn Webdev";
console.log(myName);

// Numbers
let favNumber: number = 1;
console.log(favNumber);

// Boolean
let tsHard: boolean = false;
console.log(tsHard);

let tech = "TypeScript";
let secondFavNumber = 8;
let isHard = true;
console.log(typeof tech);
console.log(typeof secondFavNumber);
console.log(typeof isHard);
// any type
let color: any = "crimson";
console.log(color);
color = 30;
console.log(color);
color = true;
console.log(color);

// regular function
function funName(firstName: string): string {
  return `Hello ${firstName}`;
}

// arrow function
const fun = (val: number): number => val * val;

/*Array

// 1st method :[]
const anyType:any[] = ['1',2,true];

// 2nd method :Array<type>
const arrayName:Array<number> =[1,2,3];

*/
// void in Typescript
function fun1(param: string): void {}
// never keyword also used in typescript
// for not returning anything.and it is used for
// 1. throw error
// 2. infinite loop
// 3.variable never value

// object: in TypeScript
/* syntax: 
    type(const/let) varName{paramsProperty:types;} = {
    property:value
    }
*/

const person: { firstName: string; lastName: string; age: number } = {
  firstName: "John",
  lastName: "Doe",
  age: 21,
};
console.log(`Name: ${person.firstName} ${person.lastName}, Age:${person.age}`);

function printUser(): { name: string; age: number; location: string } {
  return {
    name: "Huxn",
    age: 20,
    location: "China",
  };
}

const res = printUser();
console.log(res);

// custom types
type Person = {
  name: string;
  age: number;
};

type User = {
  name: string;
  age: number;
  location: string;
};

const printUserInfo = (user: User) => {
  return `Name: (${user.name}) Age:(${user.age}) Location: (${user.location})`;
};

const result = printUserInfo({ name: "Alex", age: 20, location: "USA" });
console.log(result);

type NewPerson = {
  name: String;
  age?: Number;
  email: String;
};

const user: NewPerson = {
  name: "Huxn",
  email: "Huxn@gmail.com",
};

console.log(`Name: ${user.name}, Age:${user.age}, email: ${user.email} `);

let myTuple: [number, string] = [2, "hello"];

let [first, second] = myTuple;

console.log(first);
console.log(second);

enum WeatherCondition {
  Sunny = "sunny",
  Cloudy = "cloudy",
  Rainy = "rainy",
  Snowy = "snowy",
}
console.log(WeatherCondition.Sunny);

/*

const num = printNumber(12, 20);
const str = printString("Hello","World");
const bool = printBoolean(true,false);

console.log(num);
console.log(str);
console.log(bool);
*/

/* Generic Function */
// function uniqueDataTypesFunc<Type>(
//   item: Type,
//   defaultValue: Type
// ): [Type, Type] {
//   return [item, defaultValue];
// }

/*
Notes : type = anyName which you have comfortable with that.
*/
function uniqueDataTypesFunc<val>(item: val, defaultValue: val): [val, val] {
  return [item, defaultValue];
}

const numericalRes = uniqueDataTypesFunc<number>(12, 20);
const stringRes = uniqueDataTypesFunc<string>("Hello", "World");

console.log(numericalRes);
console.log(stringRes);

function getRandomKeyValuePair<T>(obj: { [key: string]: T }): {
  key: string;
  value: T;
} {
  const keys = Object.keys(obj);
  const randKey = keys[Math.floor(Math.random() * keys.length)];

  return { key: randKey, value: obj[randKey] };
}

const stringObject = {a:'apple',b:'banana',c:'cherry'};
const stringValue = getRandomKeyValuePair<string>(stringObject);
console.log(stringValue);

const numberObject = {one:1,two:2,three:3};
const numberValue = getRandomKeyValuePair<number>(numberObject);
console.log(numberValue);