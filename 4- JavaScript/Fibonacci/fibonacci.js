let n = parseInt(readline());

let a = 0;
let b = 1;
let c;

let str = "";

if (n == 1) {
    console.log(a);
}
else {
    str += (a + ", " + b + ", ");
    for (let i = 0; i < n - 2; i++) {
        c = a + b;
        a = b;
        b = c;
        if (i != n - 3) {
            str += (b + ", ");
        }
        else {
            str += b;
        }
    }
    console.log(str);
}