/*
  javascript에서 객체를 생성하는 방법 2가지 
  (1) - 객체 리터럴 식으로 생성
  (2) - 생성자 함수를 통한 인스턴스 생성

  ES6에서의 객체지향
  : 동일한 형식의 객체를 대량으로 뽑아내야 할 때, 객체 생성을 자동화 
  : '생성자' : 객체를 생성해주는 함수
  : '인스턴스' : 생성자를 통해서 복사가 된 객체 
  : '프로토타입' : 생성자 안에 자동으로 추가되는 공통의 저장 공간 (각 인스턴스에 활용될 함수(메서드)를 등록하는 공간)
    - 같은 생성자를 통해서 복사된 인스턴스들은 prototype에 등록된 메서드를 공유함. 
  : 생성자 안쪽의 this : 해당 생성자를 통해서 앞으로 복사될 인스턴스 객체를 지칭하는 말. 

*/

class Student {
	constructor(name, age) {
		this.name = name;
		this.age = age;
		this.school = 'decodelab';
	}

	// 프로토타입의 각 인스턴스들이 공통으로 활용할 함수 등록 (메서드 생성)
	plusAge() {
		this.age = this.age + 1;
	}

	changeSchool(el) {
		this.school = el;
	}
}
// 생성자를 통해서 2개의 인스턴스 객체 복사
const s1 = new Student('David', 20);
const s2 = new Student('Emily', 21);
console.log(s1, s2);
// 인스턴스가 생성된 이후, 프로토타입의 메서드를 호출해서 일괄적으로 인스턴스의 구조를 변경 가능.
[s1, s2].forEach((el) => {
	el.changeSchool('경희대학교');
	el.plusAge();
});

console.log(s1, s2);

// 리터럴 식
/* const s1 = {
  name: 'David', 
  age: 20,
  school: 'dcodelab'
}
const s2 = {
  name: 'Emily', 
  age: 21,
  school: 'dcodelab'
}
const s3 = {
  name: 'Michael', 
  age: 19,
  school: 'dcodelab'
} */
