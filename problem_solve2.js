// problem solve 1
//নিচের Sentence এ "Sumit" শব্দটি কয়বার ব্যবহার করা হয়েছে ? প্রথমবার "Sumit" কত নাম্বার পজিশনে পাওয়া গেছে ?
const sentence = "Learn with sumit is all about teaching web development skill and techniques in an efficient an practical manner. If you are just getting started in web development, learn with sumit has all the tools you need to learn the newest and most popular technologies to convert you from no stack to full stack developer. Learn with sumit alson deep dives into advence topics using the latest best pratices foy you seasoned web developers. "

const matches = sentence.match(/sumit/gi);
const occuranes = matches ? matches.length : 0;
console.log(occuranes)

let postion = sentence.search(/sumit/i);
postion = postion >= 0 ? postion : 'not found!';
console.log(postion)


//problem 2
// input: linearSearch(['a,' 'b', 'c', 'd', 'c'] 'c');
// output: 2 or 'not found!'
// problem leaneseach function টি implement করে দেখান
function learnerSearch(array, value){
    let length = array.length
    for(var i = 0; i < length; i++){
        if(array[i] === value){
            return i;
        }
    }
    return 'Not Found!'
}

console.log(learnerSearch(['a', 'b', 'c', 'd', 'c'], 'c'));



//problem 3
// কোন Array থেকে কিভাবে সব থেকে বড় string খুঁজে বের করবেন এবং তার index নাম্বার দেখাবেন ?
function lognString(names){
  let logngWord = '';
  for(name of names){
    if(name.length > logngWord.length){
        logngWord = name;
    }
  }
  return [logngWord, names.indexOf(logngWord)]
}
console.log(lognString(['sumit saha', 'learn with sumit', 'Maruf Hasan Shihab', 'Mehedi Hasan Hridoy', 'Md Noni Joni']))



//problem 4
// ১-১০০ পর্যন্ত কোন সংখ্যা গুলো ৩-৫  এবং ৩ ও ৫ উভয় সংখ্যা দ্বারা বিভাজ্য তা বের করুন
function fizzBuzz(number){
  for(let i = 1; i < number ; i++){
    if(i % 15 === 0){
      console.log(`${i} is FizzBuzz`);
    } else if (i % 3 === 0){
      console.log(`${i} is Fizz`)
    }else if (i % 5 === 0){
      console.log(`${i} is Buzz`)
    } else{
      console.log(i)
    }
  }
}
fizzBuzz(10);



//probelm 5
// Array থেকে falsy value কিভাবে খুজে বের করে বাদ দিতে পারি
const mixArray = ['lws', undefined, 'learn with sumit', '', false, true, 'Thanks All', NaN];

const trueArray = mixArray.filter(function (v){
  if(v){
    return true;
  }else{
    return false
  }
})

console.log(trueArray)


const obj = {
  a:'lws', 
  b: undefined,
  c:'learn with sumit',
  d:'',
  e: false,
  f: true, 
  g:'Thanks All',
  h: NaN
};

function trueObj (obj){
  for(let i in obj){
    if(!obj[i]){
      delete obj[i];
    }
  }
  return obj
}

console.log(trueObj(obj))