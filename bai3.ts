interface Student {
    name: string;
    age: number;
    email: string;
}
const introduceStudent = (student: Student): void => {
    console.log(`Tên tôi là ${student.name}, tôi ${student.age} tuổi và email của tôi là ${student.email}.`);
};
const student1: Student = {
    name: "Nguyen Quang Vinh",
    age: 20,
    email: "nguyenquangvinh@gmail.com"
};

introduceStudent(student1);
