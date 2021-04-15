///////////////////////////////         МЕТОДИ    МАСИВІВ          ///////////////////////////////////


///////////////////////               Method  S O R T (сортує масив)         //////////////////////////

// let numbers = [1, 6, 9, 0, 17, 22, 99];
//
// let numbers1 = numbers.sort();
// console.log(numbers1);


///////////////////////                 Method  compareFn                //////////////////////////


// let num = [1, 6, 9, 0, 17, 22, 99];
//
// let num1 = num.sort((a,b) => {
//     console.log(a, 'A');
//     console.log(b, 'B');
//     console.log('-----------------------------------------------');
//     return a - b;
// })
// console.log(num1);


// let strs = ['Dima', 'Sergio', 'Tanya', 'Igor', 'Andrew', 'Stepan'];
//
// let strings = strs.sort((a,b) => {
//     if(a < b) {
//         return 1
//     }
//         return -1
// });
//
// console.log(strings);  //["Tanya", "Stepan", "Sergio", "Igor", "Dima", "Andrew"]

////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////                 Method FILTER (value, index, array)           ///////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////


// let numbers = [1, 6, 9, 0, 17, 22, 99];
//
// numbers.filter((value, index, array) => {
//     console.log(value);
//     console.log(index);
//     console.log(array);
//     console.log('------------------------------------------------');
// });


// let numbers = [1, 6, 9, 0, 17, 22, 99];
//
// let numbers1 = numbers.filter((value) => {
//     console.log(value);
//
//    return value % 2 === 1; //повертає не парні значення
// });
//
// console.log(numbers1);


// let strs = ['Dima', 'Sergio', 'Tanya', 'Igor', 'Andrew', 'Stepan'];
//
// let findName = strs.filter(name => name.startsWith('S'));
// console.log(findName);


// let strs = ['Dima', 'Sergio', 'Tanya', 'Igor', 'Andrew', 'Stepan'];
//
// let strings = strs.filter(name => {
//     return name.length > 5
// })
// console.log(strings);
// ["Sergio", "Andrew", "Stepan"]  Method FILTER

// let strings1 = strings.sort((a,b) => {
//     if(a < b) {
//         return 1
//     }
//         return -1
// });
//
// console.log(strings1);//["Stepan", "Sergio", "Andrew"]   Method Sort CompareFn


////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////                        Method REVERCE                        ///////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

// let strs = ['Dima', 'Sergio', 'Tanya', 'Igor', 'Andrew', 'Stepan'];
//
// let strings1 = strs.reverse();
// console.log(strings1);


////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////                      SOME  and  EVERY                        ///////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
//
// let numbers = [1, 6, 9, 0, 17, 22, 99];
//
// let some = numbers.some(number => number > 0); //true
// let every = numbers.every(number => number >= 0); //true
//
// console.log(some, 'SOME');
// console.log(every, 'EVERY');


////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////           F I N D    and    F I N D   I N D E X                 ///////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
//
// let strs = ['Dima', 'Sergio', 'Tanya', 'Igor', 'Andrew', 'Stepan'];
//
// let findName = strs.find(name => name.startsWith('I'));
// let findIndex = strs.findIndex(name => name.startsWith('A'));
//
// console.log(findName);
// console.log(findIndex);


////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////         for E A C H    (заміняє простий цикл)           /////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
//Використовується для фільтрації масивів як і forOF


// let numbers = [1, 6, 9, 0, 17, 22, 99];
//
// numbers.forEach((value, index) => {
//     if(index % 2 === 0) {
//         return;
//     }
//
//     console.log(value);
//     console.log('----------------');
// })


////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////        Method   Flat (вирівнює рівень масиву)           /////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

// let arrInArr = [1.2, 5, [8, 0, [9, 1], 8, 99, [0, 4, false, [8, [8, 8, [9, 9, [0,0]]], 0, 1]]]];
//
// console.log(arrInArr);
//
// let flat = arrInArr.flat(2);
// console.log(flat);
//


////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////              Method   M A P                //////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////


// let numbers = [1, 6, 9, 0, 17, 22, 99];
//
// let map = numbers.map((number, i) => number * i);
// console.log(map);


// let numbers = [1, 6, 9, 0, 17, 22, 99];
//
// let map = numbers.map ((value, index) => {
//
//     if(index % 2 === 0) {
//       return value * index
//     }
//     return value;
// });
// console.log(map);


// let users = [
//     {name: 'Viktoriia', surname: 'Krat'},
//     {name: 'Volodymyr', surname: 'Krat'},
//     {name: 'Bogdan', surname: 'Olevych'},
// ]
//
//
// let fullNames = users.map(user => {
//     return {
//         fullName: `${user.name} ${user.surname}`
//     }
// });
//
// console.log(fullNames);


// let strs = ['Dima', 'Sergio', 'Tanya', 'Igor', 'Andrew', 'Stepan'];
//
//
// let usersWithId = strs.map((name, index) => {
//     return {
//         id: index + 1,
//         name
//     }
// })
//
// console.log(usersWithId);



////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////              Method   R E D U C E          //////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

// let strs = ['Dima', 'Sergio', 'Tanya', 'Igor', 'Andrew', 'Stepan'];
//
//
// let reduce = strs.reduce((acc, currentValue) => {
//     console.log(acc);
//     console.log(currentValue);
//     console.log('-----------------------');
//
//     return 'XXX'
// })



// let numbers = [1, 6, 9, 0, 17, 22, 99];
//
// let number = numbers.reduce((acc, currentValue) => {
//     console.log(acc);
//     console.log(currentValue);
//     console.log('--------------------');
//
//     return acc + currentValue;
// })
// console.log(number);


// let users = [
//     {name: 'Vika', age: 10},
//     {name: 'Vova', age: 22},
//     {name: 'Vanya', age: 19},
//     {name: 'Olga', age: 39},
//     {name: 'AnNa', age: 14},
//     {name: 'Nika', age: 44},
// ];
//
// let reduce = users.reduce((acc, currentValue) => {
//     console.log(acc);
//     console.log(currentValue);
//     console.log('-----------------------');
//
//     return acc + currentValue.age;
// }, 0 );
//
// console.log(reduce);


let users = [
    {name: 'Vika', age: 10},
    {name: 'Vova', age: 22},
    {name: 'Vanya', age: 19},
    {name: 'Olga', age: 39},
    {name: 'AnNa', age: 14},
    {name: 'Nika', age: 4},
];
//
users.reduce ((acc, value) => {
    if (value.age > 18) {
        value.car = true;

        acc.push(value)
    }

    console.log(acc);
    return acc
}, [])

















