// Question No 1
var alltypeArr= ["Apple","20","Mango","50","Banana"];
console.log(alltypeArr);


// Question No 2
var allnetworkArr= ["Ufone","Zong","Warid","Jazz","Mobilink","Telenor"];
console.log(allnetworkArr);

// Question no 3
var alleducationArr= ["SSC","HSC","BCS","BS","BCOM","MS","M. Phil.","PhD"];
console.log(alleducationArr); 


// Question no 4

var arr=[]; 
arr[0]="pokemon";
arr[1]="Doremon";
arr[2]="Tom and Jerry";
arr[3]="Motu Patlu";

console.log("Top Cartoon of 2015");
console.log("1)" + arr[3]);
console.log("2)" + arr[2]);
console.log("3)" + arr[1]);
console.log("4)" + arr[0]);

console.log("Lenght of the array:" +arr.length);


// Question no 5

console.log("Favourite Cars");

var arr= ["Mercedes","Toyota","Land Cruiser","Lexes"];
console.log(arr);

arr[0]="Fist index or array: 0";
arr[1]="Car at  first index of the array: Totota";
arr[2]="Last index of th array: 3";
arr[3]="Car at the first index of array:Lexes";

console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])



// Question no 6

var student=["Michael", "john" , "tonny"];
var scores=[320,230,480];
var totalMarks=500;

console.log('score of '+ student[0] +" is " + scores[0]+".percentage:" +((scores[0]*100)/totalMarks) )
console.log('score of '+ student[1] +" is " + scores[1] +".percentage:" +((scores[1]*100)/totalMarks) )
console.log('score of '+ student[2] +" is " + scores[2]+".percentage:" +((scores[2]*100)/totalMarks) )





// Question no 7




// Question no 8
arr[0]="Score of  student: 320,230,480,120";
arr[1]="Ordered score of  student: 120,230,320,480";

console.log(arr[0])
console.log(arr[1])



// Question no 9

console.log("Fruite list:");

var arr= ["Strawberry","Apple","Orange","Banana"];
console.log(arr);


console.log(" Ordered Fruite list:");
var arr= ["Strawberry","Apple","Orange","Banana"];
console.log(arr.sort());



// Question no 10
console.log("Cities list:");

var arr= ["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
console.log(arr);


var copyData=arr.slice(2,4)
    console.log(copyData)


// Question no 11


console.log("Array:");

    var arr = ["This","is","my","cat"];
    console.log(arr);


    console.log("String:");

        var arr = ["This is my cat"];
    console.log(arr);



// Question no 12

console.log("Devices");
var eqipmentArr=["Keyboard","Mouse","Printer","Monitor"];
console.log(eqipmentArr)
console.log('out');
console.log(eqipmentArr[0]);
console.log('out');
console.log(eqipmentArr[1]);
console.log('out');
console.log(eqipmentArr[2]);
console.log('out');
console.log(eqipmentArr[3]);



// Question no 13

console.log("Devices");
var eqipmentArr=["Keyboard","Mouse","Printer","Monitor"];
console.log(eqipmentArr)
console.log('out');
console.log(eqipmentArr[3]);
console.log('out');
console.log(eqipmentArr[2]);
console.log('out');
console.log(eqipmentArr[1]);
console.log('out');
console.log(eqipmentArr[0]);



// Question no 14

var matrixArr1=[0,1,2,3];
var matrixArr2=[1,0,1,2];
var matrixArr3=[2,1,0,0];

var mainArr = [matrixArr1,matrixArr2,matrixArr3];
console.log(mainArr);


// Question no 15

var textArr=['John.','smith.','Adrew.','ahmed.'];
console.log(textArr)
console.log('First Element.:'+textArr[0]);
console.log('Last Element.:'+textArr[3]);



// Question no 16
var textArr=['John','smith','Adrew','ahmed'];
console.log(textArr.length=0);


// Question no 17

var inputArr=['Pakistan','Islamabad','Quetta','Peshawar'];

var inputuser=prompt('Enter any input');

if(inputArr.includes(inputuser)){
    console.log('input is exist');
}
else{
    console.log('not exist');
}


// Question no 18
var animalArr=['Dog','Cat','Monkey','Snake']
var addoneArr='Zebra';
var addtwoArr='Dinosour';

animalArr.splice(2,0,addoneArr);
animalArr.splice(3,0,addtwoArr);
console.log(animalArr)


// Question no 19

var String="wow"
var inputUser=prompt('Enter Text');
if(inputUser.includes(String)){
    console.log('Its A Palindrome');
}

else{
    console.log('Not A Palindrome');
}


var string=['w','o','w'];
console.log('Ascending:'+string);
console.log('descending:'+string.reverse());




// Question no 20

var elementArr=[1,2,3,4,5,,6,7,8,9,10];
console.log( 'Last Element Index Number is',elementArr-length-1);


// Question no 21

var urlArr='http://127.0.0.1:5500/index.html';
var part=urlArr.split('/');
var keyword =parts[parts.length-1];
console.log("Expected output:",keyword);


// Question no 22
var x = [
    ['Jack', 24],
    ['Sara', 23],
    ['Peter', 24]
]

console.log('Expected Output:', x[2][1]);


