// 자바스크립트는 동적 언어(Dynamic Language)이다. 즉, 정적 언어와 달리 변수를 정의할 때 자료형을 정의할 필요가 없다.

// 문자열일까? 숫자일까?
var userID;

userID = 12; // 숫자를 할당해보자.
console.log(typeof userID); // number

userID = 'user1';
console.log(typeof userID); // string

// 자료형을 정의할 필요가 없다는 게 처음에는 편리해 보이지만, 대규모 프로젝트에서 작업할 때는 문제의 원인이 될 수 있다.
// 이것의 해결책은 타입스크립트에서 언급

// 원시 자료형(primitive)은 객체가 아닌 자료형으로, 메서드를 가리키지 않는다. 다음과 같은 자료형이 원시 자료형에 해당한다.
// string : 문자열
// number : 숫자
// boolean : 불리언
// null : 널
// undefined : 정의되지 않음
// symbol : 심벌. ES6에서 추가되었다.

// const car = {
//     wheels: 4,
//     color: "red",
//     drive: function() {
//         console.log("wroom wroom")
//     },
// };
//
// console.log(Object.keys(car)[0]); // wheels
// console.log(typeof Object.keys(car)[0]); // string
// car.drive(); // wroom wroom

// 빈 객체를 만드는 방법
// const car = new Object();
// const car = {}; // 이 방법이 더 일반적으로 사용됨. 객체 리터럴.
//
// car.color = 'red'; // 점 표기법을 사용하여 객체 car에 새 속성을 추가
// console.log(car);
// {color: 'red'};

// const car = {
//     wheels: 4,
//     color: "red",
//     "goes fast": true
// };
//
// console.log(car.wheels); // 4
// console.log(car['color']); // red, 대괄호 표기법
// console.log(car['goes fast']); // true, 여러 단어로 이뤄진 속성은 점 표기법 사용 불가

const cars = {
    ferrari: "california",
    porshe: "911",
    bugatti: "veyron"
};

//사용자 입력
const key = "ferrari";
console.log(cars.key); // undefined
console.log(cars['key']); // undefined
console.log(cars[key]); //california
// 이와 같이, 변수에 저장된 키를 통해 객채의 속성에 접근하려면 대괄호 표기법을 사용해야 한다.


// 원시 자료형과는 달리 객체를 복사할 때는 참조 방식이 쓰인다.
let car = {
    color: 'red',
};
// let secondCar = car; // secondCar는 그 자체로 객체가 아니라 car에 대한 참조인 주소를 저장한다.
//
// car.wheels = 4;
// console.log(car); // {color: 'red', wheels: 4}
// console.log(secondCar); // color: 'red', wheels: 4}
//
// console.log(car == secondCar); // true, 항등 연산자
// console.log(car === secondCar); // true, 완전 항등 연산자

const emptyObj1 = {};
const emptyObj2 = {};

console.log(emptyObj1 == emptyObj2); // false
console.log(emptyObj1 === emptyObj2); // false

const obj1 = {a: 1};
const obj2 = {a: 1};

console.log(obj1 == obj2); // false
console.log(obj1 === obj2); // false

const secondCar = Object.assign({}, car); // 첫번째 인수 : 복사본 객체, 두번쨰 인수 : 원본 객체
car.wheels = 4;
console.log(car); // {color: 'red', wheels: 4}
console.log(secondCar); // {color: 'red'}

const fruitBasket = ['apple', 'banana', 'orange'];
console.log(fruitBasket[0]); // apple
console.log(fruitBasket[1]); // banana
console.log(fruitBasket[2]); // orange

// 배열의 길이를 확인
console.log(fruitBasket.length); // 3

// 배열의 끝에 새 값을 추가
fruitBasket.push('pear');
console.log(fruitBasket); // ["apple", "banana", "orange", "pear"]

// 배열의 시작에 새 값을 추가
fruitBasket.unshift('melon');
console.log(fruitBasket); // ["melon", "apple", "banana", "orange", "pear"]

// 배열의 끝에서 값 하나를 제거
fruitBasket.pop();
console.log(fruitBasket); // ["melon", "apple", "banana", "orange", "pear"]

// 배열의 시작에서 값 하나를 제거
fruitBasket.shift();
console.log(fruitBasket); // ["apple", "banana", "orange"]

// typeof를 사용하면 변수가 어떤 값을 담았는지 알 수 있다.
const str = "hello";
console.log(typeof(str)); // "string"

const num = 12;
console.log(typeof(num)); // "number"

const arr = [1, 2, 3];
console.log(typeof(arr)); // "object"

const obj = {prop: "value"};
console.log(typeof(obj)); // "object"

// null은 원시 자료형이지만 출력은 버그이다.
console.log(typeof(null)); // "object"