let data = [1, 2, 3, 45, 6, 7, 8];
let position = 3;

for (let i = position; i < data.length - 1; i++) {
    data[i] = data[i + 1];

}
data.length = data.length - 1;
console.log(data);