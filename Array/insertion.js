
let data = [12, 3, 4, 57, 8, 9];
let newEl = 10;
let position = 3;

for (let i = data.length - 1; i >= 0; i--) {
    if (i >= position) {
        data[i + 1] = data[i];
        if (i == position) {
            data[i] = newEl;
        }
    }
}
console.log(data);

// Pre Defined mthod for insert new elemnet 
data.splice(1, 0, 800);
console.log(data);