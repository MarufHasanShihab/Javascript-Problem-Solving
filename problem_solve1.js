// Problem Solve 1
// 1. লুডো খেলায় আমরা কিভাবে ১ থেকে ৬ সংখ্যা রেন্ডমলি প্রিন্ট করতে পারি ?

function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max -min + 1)) + min ;
}

console.log(getRandomNumber(1,6))

//problem 2
// কিভাবে আমরা আমাদের শ্রেণীকক্ষের সকলের নাম Alphabetically সাজাতে পারি ?
const students = ['Maruf', 'Farhan', 'Saidur', 'Emon', 'Jakir', 'Tohid'];
const alphabetically = students.sort();
console.log(alphabetically)

//prbolem 3
//কিভাবে আমরা আমাদের শ্রেণিকক্ষের সকলের রোল ক্রম অনুযায়ী সাজাতে পারি ?
const rollNumber = [3, 5,  2, 1, 10, 7, 30];
console.log(rollNumber)
console.log(rollNumber.sort(function(a, b){
    return a-b
}))

// problem 4
// কোন একটা সাল Leap Year তা বের করতে পারি কিভাবে ?
function isLeapYear(year){
    if(year % 400 === 0 || year % 4 === 0 && year % 100 !==0){
        console.log(`${year} is a leap year`)
    }else{
        console.log(`${year} is a not leap year`)
    }
}
isLeapYear(2028)

//problem 5
//কোন sentence এ কতগুলো vowel তা কিভাবে নির্ণয় করতে পারি ?
const vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
function countVowel(sentence){
   let count = 0;
   const letter = Array.from(sentence);
   letter.forEach(function(value){
    if(vowel.includes(value)){
        count++;
    }
   })
   return count
}
console.log(countVowel('I Love Bangladesh'))