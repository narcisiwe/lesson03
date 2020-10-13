
// const income = 300;
// let addexpenses;
// const deposit = true; 

// const period = 12;

// console.log(money,income,deposit);
// console.log(addExpenses.length);
// console.log('Период равен '+ period +  ' месяцев. Цель заработать ' + mission + ' евро');
// addexpenses=addExpenses.toLowerCase();
// console.log(addexpenses.split(', '));

// const budgetDay = money/30;
// console.log(budgetDay);




/*let n=5;

switch (n){
    case 3:
        console.log(3);
        break;
    case 4:
        console.log(4);
        break;
    case 5:
        console.log(5);
        break;
    case 6:
        console.log(6);
        break;
    default:
        console.log('Неверно');
}


let result = true ? 1 : 0;
console.log('result: ', result);*/


'use strict';


const money = prompt('Ваш месячный доход?');
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую: Интернет, пиТса, Коммуналка, Кокаинум').split(',');
let depositQuestion = prompt('Есть ли у вас депозит в банке? Yes/No Да/Нет');
let deposit=false; 
    switch (depositQuestion){
        case 'Yes':
            deposit = true;
            break;
        case 'Да':
            deposit = true;
            break;
        case 'No':
            deposit = false;
            break;
        case 'Нет':
            deposit = false;
            break;
        default:
            console.log('Неверно');
    }
const expenses1 = prompt('Введите обязательную статью расходов??');
const expenses2 = prompt('Введите обязательную статью расходов??');
const amount1 = prompt('Во сколько это обойдется?');
const amount2 = prompt('Во сколько это обойдется?');


let sumExpenses = 0;
for (let i=0;i<addExpenses.length;i++){
    sumExpenses = sumExpenses + parseInt(addExpenses[i]);
}
console.log(sumExpenses);


const budgetMonth = money-sumExpenses-expenses1-expenses2;

const mission = 3000000;
const targetMoney=mission/money;
console.log(Math.ceil(targetMoney));

const targetbudgetMonth = mission/budgetMonth;
console.log(Math.floor(targetbudgetMonth));

const budgetDay=(budgetMonth * 12 / 365);
if (budgetDay>=1200) {console.log('У вас высокий уровень дохода')}
else if (budgetDay>=600 && budgetDay<1200) {console.log('У вас средний уровень дохода')}
else if (budgetDay<600 && budgetDay>0) {console.log('К сожалению у вас уровень дохода ниже среднего')}
else (console.log('Что то пошло не так'));

console.log(budgetMonth);
console.log(money);
console.log(addExpenses);
console.log(deposit);
