// let num = +prompt('write a year')


// if (num % 2 == 0) {
//     console.log('even');
// }

// else {
//     console.log('odd')
// }

// if (num % 4 == 0) {
//     console.log('Kabisa yili');
// }

// else {
//     console.log('Kabisa yilimas')
// }

// let fruit = prompt('meva nomi')


// if (fruit ==='olma') {
//     console.log(' 10 000')
// }
// else if (fruit ==='nok') {
//     console.log('12 000');
// }

// else if (fruit === 'tarvuz') {
//     console.log('20 000');
// }

// else if (fruit === 'qulupnay'){
//     console.log('81 000');
// }

// else {
//     console.log('unaqa meva yoq');
// }



// let b =prompt('Bolinuvchini kiriting')

// Tasodifiy son generatsiyasi
// let son = Math.floor(Math.random() * 101);

// "Fizz", "Buzz" yoki "FizzBuzz" ligini aniqlash
// let javob = '';
// if (son % 3 === 0) {
//     javob += 'Fizz';
// }
// if (son % 5 === 0) {
//     javob += 'Buzz';
// }
// if (javob === '') {
//     javob = son;
// }

// Natijani alert orqali chiqarish
// alert(javob,);


let num = Math.floor(Math.random() * 101);

let javob = ''

if (num % 3 === 0 && num % 5 === 0) {
    javob = 'FizzBuzz'
}

else if (num % 5 === 0) {
    javob = 'Buzz'
}

else if (num % 3 === 0) {
    javob='Fizz'
}

else{
    javob= 'fizzmas buzzmas'
}

alert( 'num:'+num+javob)


