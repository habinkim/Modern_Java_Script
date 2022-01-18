// var 키워드로 선언된 변수는 함수 스코프에 종속된다.
// 반면 for 루프(블록 스코프) 내에서 var 키워드로 변수를 선언하면 이 변수를 for 루프 밖에서도 사용할 수 있다.
for (var i = 0; i < 10; i++) {
    var leak = "I am available outside of the loop";
}

console.log(leak); // I am available outside of the loop

// var가 함수 스코프 내에 제한되어 함수 외부에서 접근할 수 없다.
function myFunc() {
    var functionScoped = "I am available inside this function";
    console.log(functionScoped);
}

myFunc(); // I am available inside this function
// console.log(functionScoped); // ReferenceError: functionScoped is not defined


// let(및 const) 키워드로 선언된 변수는 블록 스코프로 종속된다. 즉, 변수가 선언된 블록과 그 하위 블록 내에서만 사용할 수 있다.
// let 사용의 예
let x = "global";

if (x === "global") {
    let x = "block-scoped";

    console.log(x); // block-scoped
}

console.log(x); // global

// var 사용의 예
var y = "global";

if (y === "global") {
    var y = "block-scoped";

    console.log(y); // block-scoped
}

console.log(y); // block-scoped