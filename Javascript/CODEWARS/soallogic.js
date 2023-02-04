/*
1. Ganjil Genap
Buat sebuah fungsi yang menerima input dari pengguna dan mengeluarkan output "Genap" jika input adalah angka genap, dan "Ganjil" jika input adalah angka ganjil.
2. Diberikan sebuah array [1, 2, 3, 4, 5]. Tampilkan angka yang genap saja.
3. Diberikan sebuah array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]. Tampilkan angka yang memenuhi kondisi: angka tersebut habis dibagi 2 DAN habis dibagi 3.
4. Buatlah sebuah fungsi yang menerima sebuah string sebagai parameter dan mengembalikan string tersebut dalam huruf besar.
5. Buatlah sebuah fungsi yang menerima sebuah array of strings sebagai parameter dan mengembalikan sebuah string baru yang berisi semua string yang ada dalam array tersebut dipisahkan oleh spasi.
6. Buatlah sebuah fungsi yang menerima sebuah array of numbers sebagai parameter dan mengembalikan sebuah array baru yang berisi angka-angka terbesar dari array tersebut.
*/

// code here

// 1.

function ganjilGenap(number) {
    if (number % 2 === 0) {
        return "genap";
    } else {
        return "adalah angka ganjil";
    }
}

// 2

var arr2 = [1, 2, 3, 4, 5];
var genap = [];

for (var i = 0; i < arr2.length; i++) {
    if (arr2[i] % 2 === 0) {
        genap.push(arr2[i]);
    }
}

// console.log(genap);

// 3

let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var soal3 = [];

for (let index = 0; index < arr3.length; index++) {
    if (arr3[index] % 2 === 0 && arr3[index] % 3 === 0) {
        soal3.push(arr3[index]);
    }
}

// console.log(soal3);

// 4

function hurufBesar(string) {
    return string.toUpperCase();
}

// console.log(hurufBesar("Wekekekeke"));

// 5

let soal5 = ["agus", "bagus", "gussam", "gusmiftah"];

console.log(soal5.join(" "));

// 6

let soal6 = [1,2,3,4,5,6,7,8,65]