console.log("Test 08");

//score: Gioi, Kha, Trung Binh, Yeu

const score = 8;

switch (true) {
    case (score >= 8 && score <= 10):
        console.log("Xep loai: Gioi");
        break;

    case (score >= 6 && score < 8):
        console.log("Xep loai: Kha");
        break;

    case (score >= 5 && score < 6):
        console.log("Xep loai: Trung Binh");
        break;       

    default:
        console.log("Xep loai: Yeu");
}

