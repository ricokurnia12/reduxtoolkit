var penumpang = [];

const tambahPenumpang = (namaPenumpang, penumpang) => {
    if (penumpang.length == 0) {
        penumpang.push(namaPenumpang);
        return penumpang;
    } else {
        for (var i = 0; i < penumpang.length; i++) {
            if (penumpang[i] == undefined) {
                penumpang[i] = namaPenumpang;
                return penumpang;
            } else if (penumpang[i] == namaPenumpang) {
                console.log("nama penumpang nama sudah ada");
            } else if (i == penumpang.length - 1) {
                penumpang.push(namaPenumpang);
                return penumpang;
            }
        }
    }
};

const hapusPenumpang = (namahapusPenumpang, penumpang) => {
    if (penumpang.length == 0) {
        return "Angkot kosong bro mari sini mari sini";
    } else {
        for (var i = 0; i < penumpang.length; i++) {
            if (penumpang[i] == namahapusPenumpang) {
                penumpang[i] = undefined;
            } else if (i == penumpang.length - 1) {
                console.log("nama penumpang tidak ada");
            }
        }
    }
    return penumpang;
};

console.log(tambahPenumpang("rico", penumpang));
console.log(tambahPenumpang("bagus", penumpang));
console.log(tambahPenumpang("bayu", penumpang));
console.log(tambahPenumpang("dara", penumpang));
console.log(hapusPenumpang("bayu", penumpang));
console.log(hapusPenumpang("bayii", penumpang));
