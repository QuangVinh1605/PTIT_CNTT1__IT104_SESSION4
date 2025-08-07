"use strict";
const handleUnionType = (id) => {
    if (typeof id === "string") {
        const length = id.length;
        console.log(`so luong ki cua chuoi la ${length}`);
    }
    else if (typeof id === "number") {
        if (id % 2 === 0) {
            console.log("so tren la so chan");
        }
        else {
            console.log("so tren la so le");
        }
    }
};
handleUnionType("demo123");
handleUnionType(10);
handleUnionType(9);
