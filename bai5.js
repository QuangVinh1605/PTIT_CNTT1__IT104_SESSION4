"use strict";
const printStaffInfo = (staff) => {
    console.log(`Nhan vien: ${staff.name} (tuoi: ${staff.age}), ma nhan vien: ${staff.employeeld}-phong:${staff.department}`);
};
const staff1 = {
    name: "Nguyen Quang Vinh",
    age: 28,
    employeeld: "EMP001",
    department: "Dev"
};
printStaffInfo(staff1);
