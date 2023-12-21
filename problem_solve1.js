// Problem Solve 1
// 1. লুডো খেলায় আমরা কিভাবে ১ থেকে ৬ সংখ্যা রেন্ডমলি প্রিন্ট করতে পারি 

function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max -min + 1)) + min ;
}

console.log(getRandomNumber(1,6))

//problem 2
// কিভাবে আমরা আমাদের শ্রেণীকক্ষের সকলের নাম Alphabetically সাজাতে পারি
const students = ['Maruf', 'Farhan', 'Saidur', 'Emon', 'Jakir', 'Tohid'];
const alphabetically = students.sort();
console.log(alphabetically)

//prbolem 3
//কিভাবে আমরা আমাদের শ্রেণিকক্ষের সকলের রোল ক্রম অনুযায়ী সাজাতে পারি