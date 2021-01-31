// Задание
// Добавь классу Car две метода.

// getPrice() - возвращает значение свойства price из объекта
//  который его будет вызывать.
// changePrice(newPrice) - обновляет значение свойства price
//  у объекта который его будет вызывать на newPrice.
// Тесты
// Объявлен класс Car.
// Конструктор класса принимает объект со свойствами brand,
//  model и price.
// Вызов Car.prototype.hasOwnProperty('getPrice') возвращает true.
// Значение Car.prototype.getPrice это функция.
// Вызов Car.prototype.hasOwnProperty('changePrice') возвращает true.
// Значение Car.prototype.changePrice это функция.

class Car {
  brand;
  model;
  price;
  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
  getPrice() {
    return this.price;
  }
  changePrice(newPrice) {
    this.price = newPrice;
  }
}
console.log(Car.prototype.hasOwnProperty('getPrice'));
//   // возвращает true.
console.log(Car.prototype.getPrice);
// //Значение это функция.
console.log(Car.prototype.hasOwnProperty('changePrice'));
//возвращает true.
console.log(Car.prototype.changePrice); //значение это функция.
