// problem solve 1
//নিচের Sentence এ "Sumit" শব্দটি কয়বার ব্যবহার করা হয়েছে ? প্রথমবার "Sumit" কত নাম্বার পজিশনে পাওয়া গেছে ?
const sentence = "Lwarn with sumit is all about teaching web development skill and techniques in an efficient an practical manner. If you are just getting started in web development, learn with sumit has all the tools you need to learn the newest and most popular technologies to convert you from no stack to full stack developer. Learn with sumit alson deep dives into advence topics using the latest best pratices foy you seasoned web developers. "

const matches = sentence.match(/sumit/gi);
console.log(matches)
const ocuranes = matches.length
console.log(ocuranes)