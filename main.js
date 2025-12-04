
// "use strict";
// function myName(a, b) {
//    console.log("rakikbul Hasan");
//    console.log(a+b);

// }
// myName(5, 10);





// ******spread operator*****

// let poorCountry =['bangladesh', 'sri lanka','africa'];

// let reichCountry = [...poorCountry,'America', 'Canada', 'Italy'];

// console.log(reichCountry);



//  ****push****

// let poorCountry =['bangladesh', 'sri lanka','africa'];

// let reichCountry = ['America', 'Canada', 'Italy'];

// reichCountry.push(poorCountry)


// console.log(reichCountry);



// ****Rest Parameter****

// function Calculation(a,b,...numbers) {
//     let sum = 0;

//     for (let i of numbers) {
//         sum = sum + i; }

//     console.log(sum);

// }

// Calculation(10,20,1, 2, 3, 4,)



// ***************// Dynamic Function*****

// let name = function (nameValue) {
//     return nameValue;
// }


// console.log(name("rakibul Hasan"));




// *******variable local Scope******

// function myFun() {
//     var name = "ECMAScript6";
//     console.log(name);
// }


// myFun();




// *******variable global Scope******

// var name = "ECMAScript6";

// function myFun() {
// }

//  console.log(name);
// myFun();




// ***********Variable Hosting************

// name = "rakibul hasan"
// console.log(name);
// var name;




// **************simple for loop***********

// var i;
// for (i = 0; i <= 100; i=i + 30) {
//     console.log("allah");

// };




// **************for of loop***********

// var myFruits = ['mango', 'apple', 'jackfruit', 'lychee'];
// for (let fruit of myFruits) {
//     console.log(fruit);

// };



// // ***************Object***********

// let iPhone = { price: 160000, color: " white", performance: true, khubvalo: true };

// let iPhonePro = {
//     details: {
//         price: 170000,
//         color: "white",
//         quality: "high",
//         performance: " beast performance"

//     },

//     features: {
//         camera: "50mga",
//         chipSet: "IOS18PRO",

//     },

//     afterSellService: {
//         sell: "khub valo price pawa jai",
//         keuKine: 'shohoje sell kora jai',

//     }

// }

// console.log(iPhonePro["details"]['performance']);





// ************for in loop*************

// let iPhone = { price: "160kBDT", color: " white", performance: true, bestCamera: true };

// for (let props in iPhone) {
//     console.log(props + "=" + iPhone[props]);

// };




// ***************// Desition making**************

// let iPhone = {
//     price: "160kBDT",
//     color: "white",
//     performance: true,
//     bestCamera: true
// };

// if (iPhone.color == "white") {
//     console.log("This iPhone is White");
// }
// else if (iPhone.color == "yellow") {
//     console.log("color not found");
// }
// else {
//     console.log("color is not found too");
// }




// ********* parameterized function***************

// function myName(x, y) {
//     let z = x + y;
//     console.log(z);

// }

// myName(10, 20);



// ***********Rest parameters***********

// function someThing(...x) {

//     console.log(x[3]);

// }

// someThing(1, 2, 3, 4, 5, 6, 7)



// *************for loop**********

// var i;
// for (i = 0; i < 10; i = i + 1) {

//     if (i == 5) {
//         continue;
//     }

//     else if (i === 8) {
//         break
//     }
//     document.write(i + "<button> Submit<button/>");
// }




// ***********while loop***********


// var i = 0;
// while (i < 10) {
//     document.write(i + "<button> Submit<button/>");
//     i = i + 1
// }



// / ***********do while loop***********

// var i = 1;
// do {
//     document.write(i + "<button> Submit<button/>");
//     i = i + 1;
// }
// while (i < 5);



// ******Learn function********


// function addTwoNumber(num1,num2) {
//     var num3 = num1 + num2;
//     document.write(num3 + " <br>")
// }

// addTwoNumber(10,20)


// function writeMyName(name) {
//     document.write(name + "<br>")
// }

// writeMyName("Rakib")


// function addTowNumber() {
//     return "Raki"
// }


// var newValue = addTowNumber() + "b"
// document.write(newValue)



// *********for loop**********

// var category = ["alu", "piyaz", "morich", "dhoniya & morich", "holud", "roshun"];

// var i;
// for (i = 0; i < category.length; i = i + 1) {
//     document.write(category[i] + "<br>")
// }



// *********for in loop over array**********


// var category = [
//     "alu",
//     "piyaz",
//     "morich",
//     "dhoniya & morich",
//     "holud", "roshun"
// ];

// for (var item in category) {
//     document.write(category[item] + "<br>");
// };





// *********for in loop over object**********


// var myFriend = {
//     name: "rezaul",
//     age: 23,
//     city: "mymensing",
//     height: "5 5'"
// }

// for (var item in myFriend) {
//     document.write(myFriend[item] + "<br>")
// }



// ****************Array concat*************

// var array1 = ["A", "E", "I", "O", "U"];

// var array2 = ["D", "F", "G", "H", "J"];


// var array3 = [array1.concat(array2)];
// document.write(array3);





// ****************Array form*************

// var Title = "Rakiul Hasan";

// var titleArray = Array.from(Title);
// document.write(titleArray[11]);




// ****************Array filter*************

// var numArray = [
//     30, 60, 40, 90, 80, 20, 10,
// ];

// var result = numArray.filter(function (item) {
//     return item > 50
// });

// document.write(result);





// ****************Array find*************

// var numArray = [30, 60, 40, 90, 80, 20, 10,];

// var result = numArray.findIndex(function (Value) {
//     return Value > 20
// });

// document.write(result);




// ****************Array forEach (like loop)*************


// var numArray = [30, 60, 40, 90, 80, 20, 10,];

// numArray.forEach(function (item) {
//     document.write(item + "<br>")
// });




// // ****************Array includes*************

// var numArray = [10, 20, 30, 40, 50, 60, 70, 80, 90];

// var newArray = numArray.includes(80);
// document.write(newArray);







// // ****************Array revers*************

// var numArray = [10, 20, 30, 40, 50, 60, 70, 80, 90];

// numArray.push(100);
// numArray.push(300);
// document.write(numArray);






// // ****************Array pop*************


// var numArray = [40, 84, 30, 40, 2, 60, 34, 10, 90];
// numArray.sort().reverse();
// document.write(numArray);







// ****************Array slice*************


// var numArray = [40, 84, 30, 40, 2, 60, 34, 10, 90];
// var newArray = numArray.slice(1, 3)
// document.write(newArray);






// ****************Array splice*************


// var numArray = [40, 84, 30, 39, 2, 60, 34, 10, 90, 100, 200, 300, 400];
// numArray.splice(5, 4)                      //  cut kora
// numArray.splice(3, 0, 40)                    // add kora
// document.write(numArray);



// **********String***********

// koto numbure ache ta dekha jabe
// var country = "Bangladesh"

// document.write(country.charAt(0))






// // **********String concat***********

// // string add kora jabe akta arektar sathe

// var country1 = "Bangladesh"
// var country2 = "pakistan"

// document.write(country2.concat(country1))






// **********String concat***********

// number bole dibe kon leter ta koi number a ache

// var country = "Bangladesh"

// document.write(
//     country.indexOf("d")
// );







// **********String slice***********

// kotha theke koto tuku tumi kat te chaw oiita aita diye korte paro

// var country = "Bangladesh"

// document.write(
//     country.slice(6, 10)
// );





// // ************string trim()***********
// ait akorle age porer spase thakbena
// var country = "      Bangladesh    "

// document.write(
//     country.trim()
// );





//*********** */ kivabe tarikh/ghonta/din mash ber korbe ********


// var obj = new Date();

// document.write(obj.getMonth())






//*********** */ kivabe math korbe ********

// var num = 7.9;

// document.write(
//     Math.floor(num)
// )



//  ***************minimum maximum*********

// document.write(
//     Math.max(23, 34, 46, 78, 98, 67,)
// )


// document.write(
//     Math.min(23, 34, 46, 78, 98, 67,)
// )



// ************Random************



// document.write(
//     Math.random()
// )




// var num = 4.9;

// document.write(
//     Math.round(num)
// )






// ********window Object with function*********


// function objAlert() {
//     alert("Save Success")
// };

// function objConfirm() {
//     let result = confirm("Do You Want To Delete?");
//     document.write(result)
// // }

// function objPrompt() {
//     let result = prompt("Write Your Name");
//     document.write(result)
// };


// function objOpen() {
//     open()
// }



// function objClose() {
//     close()
// }


// setTimeout(function () {
//     alert("alert please will come after 5 secont")
// }, 5000);







// ***********navigator browser learn**********

// var appCodeName = navigator.appCodeName;
// var appName = navigator.appName;
// var appVersion = navigator.appVersion;
// var appCondemn = navigator.appCondemn;
// var CookieEnabled = navigator.CookieEnabled;
// var language = navigator.language;
// var userAgent = navigator.userAgent;
// var platform = navigator.platform;

// document.write(appCodeName + "<br>")
// document.write(appName + "<br>")
// document.write(appVersion + "<br>")
// document.write(appCondemn + "<br>")
// document.write(CookieEnabled + "<br>")
// document.write(language + "<br>")
// document.write(userAgent + "<br>")
// document.write(platform + "<br>")


// navigator.geolocation.getCurrentPosition(function (position) {

//     let altitude = position.coords.altitude;
//     let latitude = position.coords.latitude;
//     let longitude = position.coords.longitude;
//     let speed = position.coords.speed;


//     document.write("altitude: " + altitude + "<br>")
//     document.write("latitude: " + latitude + "<br>")
//     document.write("longitude: " + longitude + "<br>")
//     document.write("speed: " + speed + "<br>")
// });




// ****************event learn************

// onklick, mouseover, mouseout

// function myEvent(msg) {
//     console.log(msg);

// }



// // ********** Dom menupolition*****

// var myElements = document.getElementsByClassName('myClass');

// myElements[2].innerHTML = "Eid Mobarok"





// ********** Dom document*****

// cookieStore, Domain, lasrModified, title, url.  thid all item learn

// function Demo() {
//     var info = document.URL;
//     document.getElementsByTagName('p')[0].innerHTML = info;

// }

// **replace*

// function Demo() {
//     document.open('text/html', 'replace');
//     document.write("<h2>Rakibul Hasan<h2/>");
//     document.close();

// }




// *********window open*****

// function Demo() {
//     let w = window.open();
//     w.document.open();
//     w.document.write("Hello Rakibul Hasan this is new window");
//     w.document.close();

// }


// ******count learn*******

// function Demo() {
//     let MyItems = document.getElementsByTagName('p');
//     let ItemCount = MyItems.length;
//     alert(ItemCount);
// }


// *** number jog kora ***

// function AddTwoNumber() {
//     let num1 = document.getElementById('num1').value;
//     let num2 = document.getElementById('num2').value;
//     let result = parseFloat(num1) + parseFloat(num2);

//     alert(result);
// }





// ******CSS menupulet*****


// function AddStyle() {
//     let H1Tag = document.getElementById('myId');
//     H1Tag.classList.add('text-primary')
// }


// function RemoveStyle() {
//     let H1Tag = document.getElementById('myId');
//     H1Tag.classList.remove('text-primary')
// }



// ********css attribute change*******

// function ChangeAttr() {
//     var myImg = document.getElementById('myImg');
//     myImg.height = "600"

// }




// **********query selector learn**********


// function FindElements() {
//     document.querySelector('h2').innerHTML = "h2 hasbeen manupulated"
//     document.querySelector('.myClass').innerHTML = "p tag hasbeen manupulated"

// }


// ***********Ajax Learn******

// function ExcGetRequest() {

//     var URL = "https://crud.teamrabbil.com/api/v1/ReadProduct";
//     var Configuration = { method: "GET" };

//     fetch(URL, Configuration)
//         .then(response => response.json())
//         .then(result => console.log(result))
//         .catch(err => console.log(err))
// }





// *******ecma script practice******

// global scope & localScpe

// //           local**

//              function myFun() {
//              var name = "rakibul hasan";
//              console.log(name);
//              }

//              myFun()



// //
//                     // ***global**
//                     var name = "rakibul hasan";
//                     function myFun() {

//                     }
//                    console.log(name);
//                     myFun()



// let iPhone = { price: "160kBDT", color: " white", performance: true, bestCamera: true };

// for (let props in iPhone) {
//     console.log(props + "=" + iPhone[props]);

// };




// *******return function*********

// function MyFunctionOne() {
//     return 20;
// }

// function MyFunctionTwo() {
//     return MyFunctionOne();
// }

// console.log(MyFunctionTwo());


// let myArr = (...r) => {
//     return "hello world"
// }
// console.log(myArr());




// *****Array inside array******

// var bangladesh = ["Dhaka", "khulna", "mymensingh"]
// var india = ["chennai", " kolkata"]
// var china = ["Uhan", "Shanghai", "Hongkong"]

// var asia = [bangladesh, india, china]
// console.log(asia[0][2]);



// *********Array destructureing*******

// var countries = ["Bang", "ind", "canada", "pakisatn"];

// var [a, , , c] = countries

// console.log(c);




// ********Map leaen *****


// var myMap = new Map();

// myMap.set("Key1", "Bangladesh")
// myMap.set("Key2", "india")
// myMap.set("Key3", "pakistan")
// myMap.set("Key4", "vutan")
// myMap.set("Key5", "nepal")


// if (myMap.has("key4")) {

//     console.log("yes");
// }
// else {
//     console.log("No");

// }



// ********Set learn********

// let mySet = new Set()

// mySet.add("Bangladesh")
// mySet.add("india")
// mySet.add("pakistan")
// mySet.add("AStrolia")
// mySet.add("maldip")


// console.log(mySet);


// let mySet = new Set()

// mySet.add("Bangladesh")
// mySet.add("india")
// mySet.add("pakistan")
// mySet.add("Australia")
// mySet.add("Muldip")

// mySet.delete("india")
// console.log(mySet);




// *****Class learn*****

// class myClass {
//     myFun1() {
//         console.log("hello my function");
//     }
//     myFun2() {
//         console.log("hello my function");
//     }
//     myFun3() {
//         console.log("hello my function");

//     }
// };

// var obj = new myClass;

// obj.myFun1();



// *****Class Constructor with paramiter****

// class myClass {
//     constructor(a, b) {
//         this.firstNum = a
//         this.secondNum = b
//     }

//     add() {
//         let result = this.firstNum + this.secondNum;
//         console.log(result);

//     }
// };

// var obj = new myClass(10, 20)

// obj.add();



// **class inheritance learn**

// class parent {
//     hello0(params) {
//         console.log("hello function0");

//     }
//     hello1(params) {
//         console.log("hello function1");

//     }
// }

// class child extends parent {

// }

// var obj = new child();
// obj.hello0();




// // **class inheritance over writing**

// class parent {
//     hello0(params) {
//         console.log("hello function0");

//     }
//     hello1(params) {
//         console.log("hello function1");

//     }
// }

// class child extends parent {
//     hello0(params) {
//         console.log("hello function0 child");

//     }

// }

// var obj = new child();
// obj.hello0();






// // **class super learn**

// class parent {
//     hello0(params) {
//         console.log("hello function0");

//     }
//     hello1(params) {
//         console.log("hello function1");

//     }
// }

// class child extends parent {

//     demo() {
//         super.hello0();
//     }

// }

// var obj = new child();
// obj.demo();




// ****Module Learn*******


const laptop = "asus leptop"
export { laptop }