// for(let i=0; i<=50; i++) {
//     if(i%2===0) {
//         console.log(i)
//     }
// }


let N=5;
let sum=0;
for(let i=0; i<=N; i++)  {
    sum=sum+i;
}
console.log(`${sum}`)
//fact
let  Number=5;
let fact=1;
for (let i=1; i<=Number; i++) {
    fact=fact*i;
}
console.log(fact)

// let Num=123;
// for ()

function reverseStr(str) {
    let reversed="";
    for(let i=str.length-1; i>=0; i --) {
        reversed+=str[i];
    } 
    return str===reversed;
}
 console.log(reverseStr("madam"));

 //armstrong
 function armstrong(num) {
    let temp=num //keep original safe
    let sum=0;
    while(temp>0) {
        let digit= temp%10; //get the last digit
        sum+=digit**3;
        temp= Math.floor(temp/10)

       }
       return sum===num;

 }
 console.log(armstrong(371));

 //sum of digits;
 function sumOfDigits(num) {
    let sum=0;
    while(num > 0 ) {
        let digit = num % 10; //get the last digit
        sum += digit;
        num = Math.floor(num / 10);

    }
    return sum;
 }
 console.log(sumOfDigits(1234));

//check anagram
function isAnagram(str1, str2) {
    let sort1= str1.split("").sort().join();
    let sort2= str2.split("").sort().join();
    return sort1===sort2;
}
console.log(isAnagram("listen", "silent"));

//fibonacci sereis
function fibonacci(n) {
    let a=0, b=1;
    console.log(a);
    console.log(b);
    for (let i=2; i<n; i++) {
        let next=a + b;
        console.log(next);
        a=b;
        b=next;
    }
    
    
}
console.log(fibonacci(10));

//check vowels
function checkVowel(str) {
    let count=0;
    let vowels= "aeiouAEIOU";
    for(let i=0; i<str.length; i++) {
        if(vowels.includes(str[i]))
        count++;
    }
    return count;
}
console.log(checkVowel("hello"));


























