// Задание
// Измени код так, чтобы объект parent стал прототипом для объекта в переменной сhild.

// Тесты
// Объявлена переменная parent.
// Значение переменной parent это объект.
// Вызов parent.hasOwnProperty('surname') возвращает true.
// Вызов parent.hasOwnProperty('heritage') возвращает true.
// Объявлена переменная child.
// Значение переменной child это объект.
// Вызов child.hasOwnProperty('name') возвращает true.
// Обращение к child.name возвращает 'Jason'.
// Вызов child.hasOwnProperty('age') возвращает true.
// Обращение к child.age возвращает 27.
// Вызов child.hasOwnProperty('surname') возвращает false.
// Обращение к child.surname возвращает 'Moore'.
// Вызов child.hasOwnProperty('heritage') возвращает false.
// Обращение к child.heritage возвращает 'Irish'.
// Вызов parent.isPrototypeOf(child) возвращает true.
// Используется метод Object.create().

const parent = {
  name: 'Stacey',
  surname: 'Moore',
  age: 54,
  heritage: 'Irish',
};
// Пиши код ниже этой строки

const child = Object.create(parent);

// Пиши код выше этой строки
child.name = 'Jason';
child.age = 27;

console.log(parent.hasOwnProperty('surname')); //возвращает true.
console.log(parent.hasOwnProperty('heritage')); //возвращает true.
console.log(child.hasOwnProperty('name')); //возвращает true.
console.log(child.name); //возвращает 'Jason'.
console.log(child.hasOwnProperty('age')); //возвращает true.
console.log(child.age); //возвращает 27.
console.log(child.hasOwnProperty('surname')); //возвращает false.
console.log(child.surname); //возвращает 'Moore'.
console.log(child.hasOwnProperty('heritage')); //возвращает false.
console.log(child.heritage); //возвращает 'Irish'.
console.log(parent.isPrototypeOf(child)); //возвращает true.
