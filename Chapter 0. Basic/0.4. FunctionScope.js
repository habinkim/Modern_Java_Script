// 스코프는 자바스크립트에서 이해해야 할 가장 중요한 개념이라고 해도 과언이 아니다.
// 변수의 스코프란 변수에 접근할 수 있는 위치를 제어한다.
// 전역 스코프를 가지는 변수는 코드의 어느 곳에서나 접근할 수 있다.
// 블록 스코프를 가지는 변수는 변수가 선언된 블록 내부에서만 접근할 수 있다.
// 블록 : 함수, 루프, 혹은 중괄호로 구분된느 모든 영역을 의미

// 'use strict';

var myInt = 1;

if (myInt === 1) {
    var mySecondInt = 2;
    console.log(mySecondInt); // 2
}
console.log(mySecondInt); // 2

// if (myInt === 1) {
//     let mySecondInt = 2;
//     console.log(mySecondInt); // 2
// }
// console.log(mySecondInt); // Uncaught ReferenceError : mySecondInt is not defined

const myCar = {
    color: 'red',
    logColor: function() {
        console.log(this.color);
    },
};
myCar.logColor(); // red

function logThis() {
    console.log(this);
}
logThis(); // Window {...}
// 이 함수는 전역 범위에서 호출했으므로 this 값은 Window 객체를 참조한다.
// 스트릭트 모드로 설정하면 실수로 Window 객체를 참조하는 것을 방지할 수 있다.
// 스트릭트 모드로 설정할려면 파일의 시작 부분에 'use strict'; 를 삽입하면 된다.

// this 값을 수동으로 설정하고자 할 때는 .bind()를 사용할 수 있다.
const unboundGetColor = myCar.logColor;
console.log(unboundGetColor()); // undefined
const boundGetColor = unboundGetColor.bind(myCar);
console.log(boundGetColor()); // red

// this 키워드의 값을 설정하는 데 사용할 수 있는 또 다른 방법으로는 .call()과 .apply() 두 가지 방법이 있다.
// 두 메서드 모두 주어진 this의 값으로 함수를 호출한다는 점에서 비슷하지만, 받아들이는 인수가 약간 다르다.
// .call()은 인수의 목록을 받는 반면, apply()는 하나의 인수 배열을 받는다.

function Car(maker, color) {
    this.carMaker = maker;
    this.carColor = color;
}

function MyCar(maker, color) {
    Car.call(this, maker, color);
    this.age = 5;
}

function MyCar2(maker, color) {
    Car.apply(this, [maker, color]);
    this.age = 5;
}

const myNewCar = new MyCar('bnw', 'red');
console.log(myNewCar.carMaker); // bmw
console.log(myNewCar.carColor); // red

new MyCar2('bmw', 'red');
console.log(myNewCar.carMaker); // bmw
console.log(myNewCar.carColor); // red

// 함수에 필요한 인수의 수를 모르거나 알 필요가 없을 때는 .apply()를 주로 쓰게 됨
const ourFunction = function(item, method, args) {
    method.apply(args);
};
ourFunction(item, method, ['argument1', 'argument2']);
ourFunction(item, method, ['argument1', 'argument2', 'argument3']);
