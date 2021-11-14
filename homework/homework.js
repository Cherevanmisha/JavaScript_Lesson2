// // - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить,
// // до якої четверті години попадає число
// // (в першу, другу, третю или четверту частину години).
// //
//
// let time = +prompt("Enter");
//
// if (time<=15) {
//     document.write('first')
// }else if (time<=30){
//     document.write('second')
// }else if (time<=45) {
//     document.write('third ')
// }else if (time<= 59) {
//     document.write('fourth')
// }




// - У змінній day дано якесь число від 1 до 31.
// Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// //
// let day = +prompt("Enter day");
//
// if (day <=10) {
//     document.write('first')
// }else if (day<=20){
//     document.write('second')
// }else if (day<=31) {
//     document.write('third')}




// - У нас є змінна test, якщо не дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false.
//     Напишіть два варіанти скрипта - з коротким записом(тернаркою)
//

// let test = "";
// if (test === true) {
//     console.log('Вірно');
// } else {
//     console.log('Неправильно');
// }



// let test = "true";
// let t = test !== true ? "Вірно" : "Неправильно";
// console.log(t);



// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
// Перевірте  скрипт при a, що дорівнює 1, 0, -3
//
// let a = +prompt();
// if (a !== 0) {
//     console.log("Вірно");
// } else {
//     console.log("Не вірно");
// }



//
// - Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.

//
// let week= +prompt();
// switch (week) {
//     case 1:
//         console.log("Гра в теніс");
//         break;
//     case 2:
//         console.log("Магазин");
//         break;
//     case 3:
//         console.log("Басейн");
//         break;
//     case 4:
//         console.log("Робота");
//         break;
//     case 4:
//         console.log("Катання на велосипеді");
//         break;
//     default:
//         console.log("What???")
// }








//
// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.


// let year = +prompt();
// if (year%4===0) {
//     console.log("Високомний рік");
// } else {
//     console.log("Невисокосний рік");
// }



//
// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме:
// „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити:
// «Не знаєте? ECMAScript!

//
// let scr = prompt("Яка «офіційна» назва JavaScript?");
// if (scr === 'ECMAScript') {
//     console.log("Правильно!");
// } else {
//     console.log('«Не знаєте? ECMAScript!')
// }