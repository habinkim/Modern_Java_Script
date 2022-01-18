function greet(name) {
    console.log("hello " + name);
}
greet("Alberto"); // hello Alberto;
// 원시 자료형이 함수에 전달될 때는 참조가 아니라 값의 형태로 전달됨.
// 이는 해당 값에 대한 변경 사항이 전역적으로 반영되지 않음을 의미.

let myInt = 1;
function increase(value) {
    return value += 1;
}

console.log(myInt); // 1
console.log(increase(myInt)); // 2
console.log(myInt); // 1

let myCar = {
    maker: "bmw",
    color: "red"
};

console.log(myCar); // {maker: "bmw", color: "red"}

function changeColor(car) {
    car.color = "blue";
}

changeColor(myCar);
console.log(myCar); // {maker: "bmw", color: "blue"}

// 함수를 선언하는 또 다른 방법은 함수 표현식을 사용하는 방법이다.
const greeter = function greet(name) {
    console.log("hello " + name);
};
greeter("Alberto");

// 함수 표현식을 사용하여 익명 함수를 만들 수도 있다.
const greeter2 = function(name) {
    console.log("hello " + name);
};
greeter2("Alberto"); // hello Alberto

// ES6에서 도입된 화살표 함수를 사용해서 같은 함수를 다른 방법으로 선언할 수도 있다.
const greeter3 = (name) => {
    console.log("hello " + name);
};
greeter3("Alberto"); // hello Alberto