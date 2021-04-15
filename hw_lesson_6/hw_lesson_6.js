// 1) Створити масив з 20 чисел та:
//     a) відсортувати його від меншого до більшого.
//     b) відсортувати його від більшого до меншого.
//     c) Відфілтрувати числа які є кратними 3.
//     d) Відфілтрувати числа які є більшими за 10.
//     e) Проітерувати його forEach та вивести кожеш елмент за допомогою document.write
//     f) За допомогою map збільшити кожен елемент в масиві в три рази.
//     g) Порахувати загальну суму всіх елментів у масиві (reduce)

// let array = [1, 12, 53, 4, 15, 6, 27, 0, 124, 10, 2, 33, 1, 5, 3, 24, 46, 28, 2, 45];
// console.log(array);

///////////////////////////////         A       ////////////////////////////////////////

// let newArrayMax = array.sort((a,b) => {
//     return (a - b);
// });
// console.log(newArrayMax);
//

//////////////////////////////         B       ////////////////////////////////////////

// let newArrayMin = array.sort ((a,b) => {
//     return (b - a);
// });
// console.log(newArrayMin);
//

/////////////////////////////////        C        /////////////////////////////////////

// let newNum = array.filter((value) => {
//     console.log(value);
//
//     return value % 3 === 0;
// })
// console.log(newNum);
//

/////////////////////////////////     D         ////////////////////////////////////////

// let numbers = array.filter((value) => {
//     return value > 10;
// });
// console.log(numbers);


///////////////////////////////             E             //////////////////////////////

// let newArrayNum = array.forEach(number =>  {
//
//     console.log(number);
//     console.log('-----------------')
//     document.write(number);
//     document.write('<br>');
//     document.write('<br>');
// })


///////////////////////////              F              ////////////////////////////
// let map = array.map((value) => {
//
//     return value * 3;
// });
// console.log(map);
//
//

/////////////////////////////             G               //////////////////////////

// let reduce = array.reduce((acc, currentValue) => {
//
//     console.log(acc);
//     console.log(currentValue);
//     console.log('-------------------');
//
//     return acc + currentValue;
// })
// console.log(reduce);


// 2) Створити масив з 20 стрічок та:
// a) Відсортувати його в алфавітному порядку
// b) Відсортувати в зворотньому порядку
// c) Отримати в новому масиві тільки ті слова, довжина яких більша за 4 букви (filter)
// d) Змінити кожне слово в масиві додавши на початок 'Sam says *ваше слово*'
//

let stringArray = ['vasya', 'petya', 'kolya', 'olya', 'max', 'oleg', 'artur', 'masha', 'sasha', 'vika',
    'gena', 'polya', 'galina', 'vova', 'marina', 'irina', 'andrey', 'masha', 'katya', 'valentina']

////////////////////////////                A                  /////////////////////////////

// let nameString = stringArray.sort((a, b) => {
//     if (a > b) {
//         return 1
//     }
//         return -1
// });
// console.log(nameString);

////////////////////////////////             B                 //////////////////////////////

// let reverseString = stringArray.reverse();
// console.log(reverseString);

///////////////////////////////             C                  //////////////////////////////

// let newName = stringArray.filter(name => {
//     return name.length > 4
// });
// console.log(newName);

//////////////////////////////              D                 ///////////////////////////////

// let map = stringArray.map(name => {
//     return `Sam says ${name}`
// });
// console.log(map);
//                                            OR

// let stringArrayNew = stringArray.forEach((value, i, array) => {
//     array[i] = `Sam says hello to ${value}` });
// console.log(stringArray);


// 3) Все робити тільки за допомогою методів масивів!
//     Дано масив :

// const users = [
//     {name: 'vasya', age: 31, isMarried: false},
//     {name: 'petya', age: 30, isMarried: true},
//     {name: 'kolya', age: 29, isMarried: true},
//     {name: 'olya', age: 28, isMarried: false},
//     {name: 'max', age: 30, isMarried: true},
//     {name: 'anya', age: 31, isMarried: false},
//     {name: 'oleg', age: 28, isMarried: false},
//     {name: 'andrey', age: 29, isMarried: true},
//     {name: 'masha', age: 30, isMarried: true},
//     {name: 'olya', age: 31, isMarried: false},
//     {name: 'max', age: 31, isMarried: true}
// ];

// a) відсортувати його за  віком (зростання , а потім окремо спадання)
//
// let usersSortMax = users.sort((a, b) => {
//     let nameA = a.age;
//     let nameB = b.age;
//     if (nameA > nameB) {
//         return 1;
//     }
//         return -1;
//
// })
// console.log(usersSortMax);
//
// let usersSortMin = users.sort((a, b) => {
//     let nameA = a.age;
//     let nameB = b.age;
//     if (nameA < nameB) {
//         return 1;
//     }
//     return -1;
// })
// console.log(usersSortMin);


// b) відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)

// let numbersOfLetters = users.sort((a, b) => a.name.length-b.name.length);
// console.log(numbersOfLetters);

// console.log('-----------')

// let numbersOfLetters1 = users.sort((a, b) => b.name.length-a.name.length);
// console.log(numbersOfLetters1);


// c) пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний
// індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в
// новий масив (первинний масив залишиться без змін)

// let usersId = users.map((value, i) => ({...value, id : i+1}));
// console.log(users);
// console.log(usersId);

// let usersWithID = users.map((x, i) => {
//     const {name, age, isMarried} = x
//     const j = {name, age, isMarried, id : i+1}
//     return j
// })
// console.log(users);
// console.log(usersWithID);


// d) відсортувати його за індентифікатором

// let usersWithID = users.map((x, i) => {
//     const {name, age, isMarried} = x
//     const j = {name, age, isMarried, id : i+1}
//     return j
// })
// console.log(users);
// console.log(usersWithID);
// console.log('--------------------------------------------');
//
//
// let sortById = usersWithID.sort ((a, b) => a.id - b.id);
// console.log(sortById);


// e) Всі хто одружений мають попасти у новий масив та отрмати квартиру (reduce)

// let usersFlat = users.reduce((acc, user) =>
//     user.isMarried ? [...acc, {...user, hasHouse: true}] :acc, []);
//
// console.log(usersFlat);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// _____________________________________________________________________________________________________________________________________________
//                                          РОБОТА В АУДИТОРІЇ
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// const cars = [
//     {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
//     {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
//     {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 330},
//     {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
//     {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
//     {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
//     {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
//     {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
//     {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
//     {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
//     {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
//     {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
//     {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 3.5,power: 260}
// ];

// Відфільтрувати масив за наступними крітеріями :

// - двигун більше 3х літрів

// let newCars = cars.filter(value => {
//     if (value.volume > 3)
//         return value
// })
// console.log(cars);
// console.log(newCars);


// - двигун = 2л

// let newCars1 = cars.filter(value => {
//     if (value.volume === 2)
//         return value
// })
// console.log(cars);
// console.log(newCars1);


// - виробник мерс

// let carMers = cars.filter(value => {
//     if (value.producer === "mercedes")
//         return value
// });
// console.log(cars);
// console.log(carMers);


// - двигун більше 3х літрів + виробник мерседес

// let newCars1 = cars.filter(value => {
//     if(value.volume > 3 && value.producer === "mercedes")
//     return value
// })
// console.log(cars);
// console.log(newCars1);


// - двигун більше 2х літрів + виробник субару

// let carSub = cars.filter(value => {
//     if (value.volume > 2 && value.producer === "subaru")
//     return value
// })
// console.log(cars);
// console.log(carSub);


// - сили більше ніж 300

// let carPower = cars.filter(value => {
//     if (value.power > 300)
//     return value
// })
// console.log(cars);
// console.log(carPower);


// - сили більше ніж 300 + виробник субару

//   let carPower = cars.filter(value => {
//       if (value.power > 300 && value.producer === "subaru")
//       return value
//   })
// console.log(cars);
// console.log(carPower);


// - мотор серіі ej

// let findCar = cars.filter(value => value.engine.startsWith('ej'));
// console.log(findCar);


// - сили більше ніж 300 + виробник субару + мотор серіі ej

// let filterOfCars = cars.filter(value => {
//     if(value.power > 300 && value.producer === "subaru" && value.engine.startsWith('ej'))
//         return value
// })
// console.log(cars);
// console.log(filterOfCars);


// - двигун меньше 3х літрів + виробник мерседес

//   let carNew = cars.filter(value => {
//       if (value.volume < 3 && value.producer === "mercedes")
//       return value
//   })
// console.log(cars);
// console.log(carNew);

// - двигун більше 2л + сили більше 250

// let powerCar = cars.filter(value => {
//     if (value.volume > 2 && value.power > 250)
//         return value
// })
// console.log(cars);
// console.log(powerCar);


// - сили більше 250  + виробник бмв

// let anotherNewCar = cars.filter(value => {
//     if (value.power > 250 && value.producer === "bmw")
//     return value
// })
// console.log(cars);
// console.log(anotherNewCar);


// - взять слдующий массив

const usersWithAddress = [
    {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
    {id: 2, name: 'petya', age: 33, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
    {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 135}},
    {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
    {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
    {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
    {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
    {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
    {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
    {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
    {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
];

// -- Відсортувати їх по ID

// let newUsers = usersWithAddress.sort((a,b) => {
//     if (a.id > b.id) {
//         return 1
//     }
//         return -1
// })
// console.log(newUsers);

// -- Відсортувати їх по ID в зворотньому порядку

// let newUsers1 = usersWithAddress.sort((a,b) => {
//     if (a.id < b.id) {
//         return 1
//     }
//         return -1
// })
// console.log(newUsers1);


// -- Відсортувати по віку

// let usersAge = usersWithAddress.sort((a, b) => {
//     if (a.age > b.age) {
//      return 1
//     }
//     return -1
// })
// console.log(usersAge);

// -- Відсортувати по віку в зворотньому порядку

// let usersAge = usersWithAddress.sort((a, b) => {
//     if (a.age < b.age) {
//         return 1
//     }
//     return -1
// })
// console.log(usersAge);

// -- Відсорутвати по імені

// let newNameOfUsers = usersWithAddress.sort((a, b) => {
//     if (a.name > b.name) {
//         return 1
//     }
//        return -1
// })
// console.log(newNameOfUsers);

// -- Відсорутвати по назві вулиці

// let newStreetOfUsers = usersWithAddress.sort((a, b) => {
//     if (a.address.street > b.address.street) {
//         return 1
//     }
//         return -1
// })
// console.log(newStreetOfUsers);

// -- Відсорутвати по номеру будинку

// let numberOfHouse = usersWithAddress.sort((a, b) => {
//     if (a.address.number > b.address.number)  {
//         return 1
//     }
//     return -1
// })
// console.log(numberOfHouse);

// -- Залишити тільки тих, хто молодший ніж 30 (filter)

// let youngUsers = usersWithAddress.filter(value => {
//     if (value.age < 30) {
//         return value
//     }
// });
// console.log(youngUsers);


// -- Залишити тільки одружених

// let marriedUsers = usersWithAddress.filter(value => {
//     if (value.isMarried === true)
//     return value;
// })
// console.log(marriedUsers);

// -- Залишити тільки одружених, які молодні за 30

// let newUsers1 = usersWithAddress.filter(value => {
//     if (value.isMarried === true && value.age < 30) {
//         return value
//     }
// });
// console.log(newUsers1);

// -- Залишити лише тих, в кого парні номери будинків.

// let pairNumber = usersWithAddress.filter(value => {
//     if (value.address.number % 2 === 0)
//         return value
// });
// console.log(pairNumber);


// -- Порахувати загальний вік всіх людей. (reduce)

// console.log(usersWithAddress);
//
// let usersAge = usersWithAddress.reduce((acc, currentValue) => {
//     console.log(acc);
//     console.log(currentValue.age);
//     console.log('-----------------------------');
//
//     return acc + currentValue.age;
// }, 0);
// console.log(usersAge);

// -- Ті, хто одружений і старший за 30 має отримати обєкти child і попасти в новий масив (reduce)

// let usersWithChild = usersWithAddress.reduce((acc, value) => {
//     if (value.isMarried === true && value.age > 30) {
//         value.child = true;
//
//         acc.push(value)
//     }
//     console.log(acc);
//     return acc
// }, []);














/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ______________________________________________________________________________________________________________________________________________________
// Додатково
// ______________________________________________________________________________________________________________________________________________________
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Створити обєкт автомобіля з полями:
//     Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
//     Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
//     Створити не менше 7 та не більше 20 машинок.
//     Для початку вкладіть всі наші створені автомобілі в масив cars.
//     Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25,
//     то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
//     Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі.



// Задача: дан отсортированный по возрастанию массив целых чисел.
//     Необходимо вернуть наименьший и наибольший индекс заданного элемента.
//     Входные данные: arr — массив целых чисел значения которых по модулю не больше 10.
//     Размер массива не более 10 элементов.
//     Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого
//     элемента нет в массиве, выведите -1.
//
// Пример:

// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.

// const arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
//
// const findMinAndMax = (array, key) => {
//     let minIndex = null;
//     let maxIndex = 0;
//
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === key) {
//             if (!minIndex) {
//                 minIndex = i;
//             }
//             maxIndex = i;
//         }
//     }
//     return `Answer: MinIndex = ${minIndex}, MaxIndex = ${maxIndex}`
// }
// console.log(findMinAndMax(arr, 4));
//











