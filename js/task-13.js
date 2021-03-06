// Задание
// Выполни рефакторинг заменив функцию-конструктор StringBuilder
//  на класс с методами. Сделай так, чтобы свойство value было приватным.

// Под комментарием мы добавили инициализацию экземпляра
//  и вызовы методов в той последовательности, в которой
//   твой код будут проверять тесты. Пожалуйста ничего там не меняй.

// Тесты
// Объявлен класс StringBuilder.
// Свойство value в классе StringBuilder объявлено приватным.
// Вызов StringBuilder.prototype.hasOwnProperty('getValue')
//  возвращает true.
// Вызов StringBuilder.prototype.hasOwnProperty('padEnd')
//  возвращает true.
// Вызов StringBuilder.prototype.hasOwnProperty('padStart')
//  возвращает true.
// Вызов StringBuilder.prototype.hasOwnProperty('padBoth')
//  возвращает true.
// В результате вызова new StringBuilder('.')
//  значение переменной builder это объект.
// Вызов StringBuilder.prototype.isPrototypeOf(builder) возвращает true.
// У объекта builder нет свойства value.
// Первый вызов builder.getValue()
// , сразу после инциализации экземпляра, возвращает строку '.'.
// Второй вызов builder.getValue(), после вызова builder.padStart('^'),
//  возвращает строку '^.'.
// Третий вызов builder.getValue(), после вызова builder.padEnd('^'),
//  возвращает строку '^.^'.
// Четвёртый вызов builder.getValue(), после вызова builder.padBoth('='),
//  возвращает строку '=^.^='.

//  function StringBuilder(baseValue) {
//     this.value = baseValue;
//   }

//   StringBuilder.prototype.getValue = function () {
//     return this.value;
//   };

//   StringBuilder.prototype.padEnd = function (str) {
//     this.value += str;
//   };

//   StringBuilder.prototype.padStart = function (str) {
//     this.value = str + this.value;
//   };

//   StringBuilder.prototype.padBoth = function (str) {
//     this.padStart(str);
//     this.padEnd(str);
//   };

class StringBuilder {
  #value;

  constructor(value) {
    this.#value = value;
  }
  getValue(str) {
    return this.#value;
  }

  padEnd(str) {
    this.#value += str;
  }

  padStart(str) {
    this.#value = str + this.#value;
  }

  padBoth(str) {
    this.padStart(str);
    this.padEnd(str);
  }
}

// Пиши код выше этой строки
const builder = new StringBuilder('.');

console.log(StringBuilder.prototype.hasOwnProperty('getValue'));
//возвращает true.
console.log(StringBuilder.prototype.hasOwnProperty('padEnd'));
//возвращает true.
console.log(StringBuilder.prototype.hasOwnProperty('padStart'));
// возвращает true.
console.log(StringBuilder.prototype.hasOwnProperty('padBoth'));
//возвращает true.
console.log(new StringBuilder('.'));
// значение переменной builder это объект.
console.log(StringBuilder.prototype.isPrototypeOf(builder));
// возвращает true.

console.log(builder.getValue()); // '.'
builder.padStart('^');
console.log(builder.getValue()); // '^.'
builder.padEnd('^');
console.log(builder.getValue()); // '^.^'
builder.padBoth('=');
console.log(builder.getValue()); // '=^.^='
