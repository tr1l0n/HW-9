// 1
// function logItems(array) {
//     for (let i = 0; i < array.length;i++) {
//         console.log( `${i + 1} - ${array[i]}`);
//     }
//     return;
// }
// console.log(logItems([1,2,3,4,5,6]))

// 2
// function calculateEngravingPrice(message, pricePerWord) {
//     let a = message.split(' ');
//     let sum = 0;
//     for (let i = 0; i < a.length; i++){
//         sum += pricePerWord;
//     }
//     return `Ціна гравіювання усіх слів в рядку = ${sum}`;
// }
// console.log(calculateEngravingPrice('hello my name is Dima',15));


// 3
// function findLongestWord(string) {
//     let a = string.split(' ');
//     let max = 0;
//     let word;
//     for (let i = 0; i<a.length; i++){
//         if (a[i].length > max) {
//             max = a[i].length;
//             word = a[i];
//         }
//     }
//     return word;
// }
// console.log(findLongestWord('hello my name is dmytro'));


// 4
// function formatString(string) {
//     if (string.length > 40) {
//         let a = string.slice(0, 40);
//         a += '...'
//         return a;
//     }
//     return string;
// }
// console.log(formatString('hello my name is dima and im 16 years old'));


// 5
// function checkForSpam(message) {
//     let spam = 'dima';
//     let sale = 'sasha';
//     if (message.includes('dima') === true || message.includes('sasha') === true) {
//         return true;
//     }
//     return false;
// }
// console.log(checkForSpam('hello my name is oleg'));

// 6
// let total = 0;
// let numbers = [];
// while (true) {
//     let a = prompt('Введіть число');
//     if (a === null) {
//         break;
//     }
//     numbers.push(Number(a));
// }
// if (numbers.length > 0) {
//         for (let i = 0; i < numbers.length; i++){
//             total += numbers[i];
//         }
//     }
// console.log(total);

// 7
let logins = ['a', 'b', 'c'];
function isLoginValid(login) {
    if (login.length > 4 && login.length <= 16) {
        return true;  
    };
    return false;
}
function isLoginUnique(allLogins, login) {
    if (allLogins.includes(login) === true) {
        return false;
    };
    return true;
}
function addLogin(alLogins, login) {
    if (isLoginValid === false) {
        return 'Помилка! Логін повинен бути від 4 до 16 символів';
    }
    if (isLoginUnique === false) {
        return 'Такий логін уже використовується!';
    }
    logins.push(login);
    return 'Логін успішно доданий!';
}
console.log(addLogin(logins,'a'));

