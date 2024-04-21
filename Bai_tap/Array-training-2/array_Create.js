let n
let arr1 = [];
let element;
do {
    n = parseInt(prompt("Nhap vao n phan tu"));
} while (isNaN(n) || n <0 || n >100)
for (let i = 0; i < n; i++) {
    element = prompt("Nhap vao phan tu");
    arr1.push(element);
}