// function jumlahVolumeDuaKubus(a, b) {
//     return a * a * a + b * b * b;
// }
// console.log("ini jumlah volume kubus :" + jumlahVolumeDuaKubus(1, 2));

// function tambah(c, d) {
//     return c + d;
// }

// const hasil = jumlahVolumeDuaKubus(1, tambah(1, 2));

// console.log(hasil)

//----function with arguments----//

// function tambahargument() {
//     var hasil = 0;
//     for (var i = 0; i < arguments.length; i++) {
//         hasil += arguments[i];
//     }
//     return hasil;
// }

// var coba = tambahargument(1, 2, 3, 4);

// console.log(coba);

// ---------function scope--------//
// var b=3
// function scope () {
//     var a = 2 ;

//     console.log(a)
//     console.log(b)

// }
// console.log(b)

// scope()

// console.log(a)

//-----------Rekursif------------//

// function tes(n) {
// if(n===0)return
//     console.log(n);
//     return tes(n-1);
// }

// tes(1000);

// function factorial(e){
//     if (e===0) return 1;
//     return e * factorial(e-1)
// }

// console.log(factorial(5))

//--------coba----------//
// function patungan (a, b) {
//     return a * b

// }

// console.log(patungan(1,2))

// -----------Function Expresion-------------//




//--------------Arrow function--------------//

// without arrow function

// const tampilNama = function (nama){
//     return `Halo, ${nama}`
// }

// console.log(tampilNama('coco'))
// ..............................

// with arrow function

// const tampilNama = nama =>  `Haloi bang ${nama}`;

// console.log(tampilNama('coco'))
// .......................

// let mahasiswa = ["Coco", "Bacico", "Yoma"];
// without arrow function

// const jumlahhuruf  = mahasiswa.map(function (nama){
//     return nama.length
// })

// console.log(jumlahhuruf)
// .............................

// with arrow function

// const jumlahhuruf = mahasiswa.map((nama) => {
// return nama.length
// } )
// console.log(jumlahhuruf)

// const jumlahhuruf = mahasiswa.map(nama => nama.length)
// console.log(jumlahhuruf)

// const jumlahhuruf = mahasiswa.map((name) => ({
//     nama: name,
//     jmlHuruf: name.length,
// }));

// console.table(jumlahhuruf)

// ................................

// This.......

// const Mahasiswa = function() {
//     this.nama = 'Rico';
//     this.umur = 23;
//     console.log(this)
// }


// const rico = new Mahasiswa()