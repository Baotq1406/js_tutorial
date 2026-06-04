console.log("Lab 02");

const diemToan = 9;
const diemVan = 8;
const diemAnh = 7;

// function TinhTrungBinh(toan, van, anh) {
//     return (toan + van + anh) / 3;
// }

// console.log("Trung binh:", TinhTrungBinh(diemToan, diemVan, diemAnh));

// function XepLoai(trungBinh) {
//     if (trungBinh >= 9 && trungBinh <= 10) {
//         return "Xuat sac";
//     } else if (trungBinh >= 8 && trungBinh < 9) {
//         return "Gioi";
//     } else if (trungBinh >= 6.5 && trungBinh < 8) {
//         return "Kha";
//     } else {
//         return "Trung binh";
//     }
// }

// console.log("Xep loai:", XepLoai(TinhTrungBinh(diemToan, diemVan, diemAnh)));

const TinhTrungBinh = (toan, van, anh) => {
    return (toan + van + anh) / 3;
}

const XepLoai = (trungBinh) => {
    if (trungBinh >= 9 && trungBinh <= 10) {
        return "Xuat sac";
    } else if (trungBinh >= 8 && trungBinh < 9) {
        return "Gioi";
    } else if (trungBinh >= 6.5 && trungBinh < 8) {
        return "Kha";
    } else {
        return "Trung binh";
    }
}

const trungBinh = TinhTrungBinh(diemToan, diemVan, diemAnh);

console.log(`
    Trung binh: ${trungBinh}
    Xep loai: ${XepLoai(trungBinh)}
    `);