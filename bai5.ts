interface person{
    name: string;
    age: number;
}
interface employee{
    employeeld: string;
    department: string;
}

type staffMember = person & employee;

const printStaffInfo= (staff: staffMember):void=> {
    console.log(
        `Nhan vien: ${staff.name} (tuoi: ${staff.age}), ma nhan vien: ${staff.employeeld}-phong:${staff.department}`
    );
    
}
const staff1: staffMember = {
    name: "Nguyen Quang Vinh",
    age: 28,
    employeeld: "EMP001",
    department: "Dev"
};

printStaffInfo(staff1);