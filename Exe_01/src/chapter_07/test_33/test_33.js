console.log("test 33");

const greeting = (name, callback) => {
    console.log("Hello, ", name);
    //embeoxinchao();
    callback();
};

const hello = () => {
    console.log("learn callback....");
};

const hi = () => {
    console.log("hi, welcome to callback");
};

greeting("bao", hello);
greeting("bla bla", hi);

//callback hell khong nen su dung callback nhieu lan, nen dung promise hoac async await de xu ly code de dang hon
// loginUser("hoidanit", function (user) {
//     getUserProfile(user.id, function (profile) {
//         getUserSettings(profile.id, function (settings) {
//             updateUI(settings, function () {
//                 console.log("Hoàn thành!");
//             });
//         });
//     });
// });