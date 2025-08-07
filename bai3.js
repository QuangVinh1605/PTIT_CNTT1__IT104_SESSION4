"use strict";
const introduceStudent = (student) => {
    console.log(`Tên tôi là ${student.name}, tôi ${student.age} tuổi và email của tôi là ${student.email}.`);
};
const student1 = {
    name: "Nguyen Quang Vinh",
    age: 20,
    email: "nguyenquangvinh@gmail.com"
};
introduceStudent(student1);
