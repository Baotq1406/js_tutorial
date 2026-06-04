console.log("Lab 03");  

const pd1 = {
    name: "Iphone 14 Pro Max",
    price: 30000000,
    inStock: true,
};

const pd2 = {
    name: "Samsung Galaxy S23 Ultra",
    price: 25000000,
    inStock: false,
};

const pd3 = {
    name: "Xiaomi 13 Pro",
    price: 20000000,
    inStock: true,
};

const pd4 = {
    name: "Oppo Find X5 Pro",
    price: 15000000,
    inStock: false,
};

const pd5 = {
    name: "Realme GT 2 Pro",
    price: 10000000,
    inStock: true,
};

const products = [pd1, pd2, pd3, pd4, pd5];
console.log("Original products:", products);

console.log("In ten san pham dau tien:", products[0].name);

products[1].price = 150;
console.log("Changed product:", products);

products.push({
    name: "Vivo X80 Pro",
    price: 12000000,
    inStock: true,
});
console.log("After push:", products);

products.pop();
console.log("After pop:", products);

products.forEach((product, index) => {
    console.log("Name of product", index, ":", product.name);
});

const productPricesList = products.map((product, index) => {
    return product.price;
});
console.log("Product prices:", productPricesList);

const inStockProducts = products.filter((product, index) => {
    return product.inStock; // trả về true nếu product.inStock là true, ngược lại trả về false
});
console.log("In stock products:", inStockProducts);

for (let value in pd1) {
    console.log(value, ":", pd1[value]);
}