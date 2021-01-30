// Задание
// Выполни рефакторинг функции-конструктора Car так, чтобы она
//  принимала один параметр - объект со свойсвами brand, model и price.
//  Деструктуризируй объект в сигнатуре (подписи) функции.

// Тесты
// Объявлена функция Car({ brand, model, price }).
// В результате вызова new Car({ brand: 'Audi', model: 'Q3', price: 36000 })
//  получится объект { brand: 'Audi', model: 'Q3', price: 36000 }.
// В результате вызова new Car({ brand: 'BMW', model: 'X5', price: 58900 })
//  получится объект { brand: 'BMW', model: 'X5', price: 58900 }.
// В результате вызова new Car({ brand: 'Nissan', model: 'Murano',
//  price: 31700 }) получится объект { brand: 'Nissan', model: 'Murano',
//   price: 31700 }.

function Car({brand, model, price}) {
    this.brand = brand;
    this.model = model;
    this.price = price;
}  



console.log(new Car({ brand: 'Audi', model: 'Q3', price: 36000 }));
//  получится объект { brand: 'Audi', model: 'Q3', price: 36000 }.
console.log(new Car({ brand: 'BMW', model: 'X5', price: 58900 }));
//    получится объект { brand: 'BMW', model: 'X5', price: 58900 }.
console.log(new Car({ brand: 'Nissan', model: 'Murano', price: 31700 }));
//  получится объект { brand: 'Nissan', model: 'Murano', price: 31700 }.
