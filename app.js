'use strict';
const memo = new Map();     // 連想配列のmap (キー:順番、値:答え)
// 0番目と1番目の答えは予め定義されているので、それを格納
memo.set(0, 0);
memo.set(1, 1);

// 連想配列が n をキーとした答えを持っていればその値をそのまま返し、
// そうでない場合は再起関数を計算して求める
function fib(n){
    if(memo.has(n)){
        return memo.get(n);
    }
    const value = fib(n - 1) + fib(n - 2);
    memo.set(n, value);
    return value;
}

const length = 40;
for(let i = 0; i <= length; i++){
    console.log(fib(i));
}