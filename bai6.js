"use strict";
let listProduct = [
    {
        id: "I01",
        name: "nike akjlfhjoksajhdfka",
        price: 3000000,
        category: { id: "V01", name: "Thời trang nam" },
        discount: 0.6
    },
    {
        id: "I02",
        name: "nike ,ajhfkjasnfkjadNF",
        price: 1200000,
        category: { id: "V02", name: "Giày dép" }
    },
    {
        id: "I03",
        name: "adidas jsdhfgn,mshdnfkjsd",
        price: 850000,
        category: { id: "V03", name: "Thời trang nữ" },
        discount: 0.1
    }
];
const getFinalPrice = (product) => {
    if (product.discount) {
        return product.price * (1 - product.discount);
    }
    return product.price;
};
const printProductInfo = (product) => {
    const finalPrice = getFinalPrice(product);
    console.log(`ten san pham:${product.name}`);
    console.log(`gia goc:${product.price} VND`);
    if (product.discount) {
        console.log(`gia sau khi giam: ${finalPrice} VND`);
    }
    console.log(`Danh muc: ${product.category.name}`);
};
listProduct.forEach(printProductInfo);
