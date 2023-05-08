'use strict';

const randomizer = (n , m) => {
    let arr = [];
    if (m >= n) {
        for ( let i = n; i <= m; i++) {
            // НА 400 делить не обязательно , но добавил
            if(i % 4 === 0 || i % 400 === 0) {
                if(i % 100 === 0 && i % 400 !== 0){   
                } else {
                    arr.push(i);
                }
            } 
        }
    }
    
    if (n > m) {
        for ( let i = m; i <= n; i++) {
            // НА 400 делить не обязательно , но добавил
            if(i % 4 === 0 || i % 400 === 0) {
                if(i % 100 === 0 && i % 400 !== 0){   
                } else {
                    arr.push(i);
                }
            } 
        }
    }

    return arr;
}

console.log(randomizer(-100, 100));