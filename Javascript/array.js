// --------INTRO---------//
/* tempat penampungan data yabg bisa menampung lebih dari satu nilai

const hari = ['senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu', 'minggu']

const mapel = ['MTK', 'B.Indo', 'Ipa', 'PKN', 'TIK', 'Seni rupa' ]

*/

// const hari = ['senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu', 'minggu']

// const myArray = ['hallo', 'coco' , 'ida', [1,2,3]]

// console.log(myArray[3][1])

// --------------Array Manipulation-------------//
// menambah array
// var arr = [];
// arr[0] = "1";
// arr[1] = "2";
// arr[2] = "3";

// console.log(arr);

// // menghapus aray

// var arr2 = [1, "coco", 3];

// arr2[1] = undefined;

// console.log(arr2);

// menampilkan isi array

// var arr3 = [1, "coco", 3];

// for (var i = 0; i < 3; i++) {
//     console.log("ini adalah" +' '+ arr3[i]);
// }

// ---------Array Method-----------//

/*
1.length
2. Join
3. Push menambah elemen terakhir
4. Pop menghapus elemen terakhir
5. unShift menambah elemen pertama
6. Shift menghapus elemen terakhir
7. Splice
8. Slice
9. Foreach
10. Map
*/

const arr4 = ["rico", 1, "ida", 2];

// console.log(arr4.length)

// console.log(arr4.join('-'))

// arr4.push('Rida','Firda')
// arr4.pop()
// arr4.unshift('rock')
// arr4.shift()

// splice
// splice(indexAwal, mau dihapus berapa, elemenbaru1, elemenbaru2)

// arr4.splice(2, 0, 'Hm,,,')

// arr4.splice(2, 1, "henshin", "kamen rider");

// console.log(arr4)

// console.log(arr4);

// slice
// const newslice = arr4.slice(0, 3);

// console.log('ini aray slice' + newslice)

// Foreach

const iniforeach = [1, 2, 3, 4, 5, 6, 7, 8];

// for (let i = 0; i<iniforeach.length; i++){
//     console.log(iniforeach[i])
// }

// iniforeach.forEach((e) => console.log(e));

// iniforeach.forEach(function tes(e) {
//     console.log(e);
// });

// iniforeach.forEach(function (e) {
//     console.log(e);
// });

// const cetakangka = (e) => {
//     console.log(e);
// };

// iniforeach.forEach(cetakangka)

const nama = [
    "Rico",
    "Aji",
    "Dara",
    "Acel",
    "Bayu",
    "Alin",
    "Fifi",
    "Puti",
    "Kemal",
];
// nama.forEach((e, i) => {
//     console.log("Mahasiswa ke-" + i + " adalah" + " " + e);
// });

// Map
