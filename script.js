'use strict';


const money = prompt('Ваш месячный доход?');
const addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую: Интернет, пиТса, Коммуналка, Кокаинум');

function deposit() {
    let answer = prompt('Есть ли у вас депозит в банке? Yes/No Да/Нет');
  
    answer = answer.trim().toLowerCase();
  
    switch (answer) {
      case 'yes':
      case 'да':
        return true;
  
      case 'no':
      case 'нет':
        return false;
  
      default:
        return 'Самсинг вронг';
    }
  
  }
 
  console.log( deposit() );

const expenses1 = prompt('Введите обязательную статью расходов??');
const expenses2 = prompt('Введите обязательную статью расходов??');
const amount1 = prompt('Во сколько это обойдется?');
const amount2 = prompt('Во сколько это обойдется?');


const sumExpenses = addExpenses.split(',').reduce(function(a,b) {return a + +b},0);
console.log(sumExpenses);


const budgetMonth = money-sumExpenses-expenses1-expenses2;

const mission = 3000000;
const targetMoney=mission/money;
console.log(Math.ceil(targetMoney));

const targetbudgetMonth = mission/budgetMonth;
console.log(Math.floor(targetbudgetMonth));

const budgetDay=(budgetMonth * 12 / 365);
    if (budgetDay>=1200) {console.log('У вас высокий уровень дохода')}
        else if (budgetDay>=600) {console.log('У вас средний уровень дохода')}
        else if (budgetDay>=0) {console.log('К сожалению у вас уровень дохода ниже среднего')}
            else (console.log('Что то пошло не так'));

console.log(budgetMonth);
console.log(money);
console.log(addExpenses);

