/*Buatlah logika if untuk mengevaluasi nilai score dengan ketentuan:
 *  1. Jika nilai score lebih atau sama dengan 90
 *      - Isi variabel result dengan nilai: 'Selamat! Anda mendapatkan nilai A.'
 *  2. Jika nilai score ada di antara 80 hingga 89
 *      - Isi variabel result dengan nilai: 'Anda mendapatkan nilai B.'
 *  3. Jika nilai score ada di antara 70 hingga 79
 *      - Isi variabel result dengan nilai: 'Anda mendapatkan nilai C.'
 *  4. Jika nilai score ada di antara 60 hingga 69:
 *      - Isi variabel result dengan nilai: 'Anda mendapatkan nilai D.'
 *  5. Jika nilai score di bawah 60:
 *      - Isi variabel result dengan nilai: 'Anda mendapatkan nilai E.'*/

function score(n) {
    var result = "";
    if (n >= 90) {
        result = "Selamat! Anda mendapatkan nilai A.";
    } else if (n >= 80) {
        result = "Selamat! Anda mendapatkan nilai B.";
    } else if (n >= 70) {
        result =
            "Semangat Jangan Menyerah! Anda mendapatkan nilai C.";
    } else if (n >= 60) {
        result = "Ayo belajar lagi! Anda mendapatkan nilai D.";
    } else if (n <= 60) {
        result =
            "Silahkan mengulangi di semester depan dan jangan menyerah! Anda mendapatkan nilai D.";
    } return result;
}

// var rows = 5

// for (let i = 0; i<rows; i++){
//     console.log('wkwkwk')
// }

let rows = 1;

let bintangPersegi = '';
for (let i = 0; i < rows; i++) {
    for (let j = 0; j < rows; j++) {
        bintangPersegi += '*';
    }
    bintangPersegi += '\n';
}
console.log(bintangPersegi);


