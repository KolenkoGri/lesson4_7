'use strict';

const game = () => {
    const minNum = prompt("Введите МИНИМАЛЬНОЕ число диапозона загадываемого числа");
    const maxNum = prompt("Введите МАКСИМАЛЬНОЕ число диапозона загадываемого числа");
    let number = Math.round(Math.random() * (maxNum - minNum) + minNum);
    console.log(number);
    let answer = prompt("Какое число загадал бот?");
    let arrUser = [];
    let count = Math.floor(number * 0.3);
    if(minNum >= 50 && minNum < 100 && maxNum > 50 && maxNum <= 100){
        count = 15;
    }
    console.log("count", count);
    for (let i = 0; i < count; i++) {
        if(answer){ 
            if (arrUser.includes(answer)){
                answer = prompt("Это число вы уже вводили");
                i--;
            }else {

                if (isNaN(+answer)) {
                    answer = prompt("Введите число");
                }
                arrUser.push(answer);

                if (Number(number) > answer ) {
                    answer = prompt("Больше!");
                    arrUser.push(answer);
                }

                if (Number(answer) > number ) {
                    answer = prompt("Меньше!");
                    arrUser.push(answer);
                }

                if (number === Number(answer) ) {
                    alert("Правильно!");
                    i = count;
                }
            }
        }
    }
    return arrUser;
}

    console.log("Символы введенные пользователем до правильного ответа:", game())


