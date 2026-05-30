let n=12;
let sum=0;
let num=9;
let mul;
let result;
let ans=0;
let isprime=true;
let OriginalNum=n;


//sum of  n natural numbers
console.log("Given number is ",n);
for(let i=0;i<n;i++){
    sum=sum+i;
    sum++;
}
console.log("sum of n natural numbers",sum);


//sum of first n numbers
for(let i=0;i<n;i++){
    ans=n%10;

    ans++;
}
console.log("Sum of its digits "+ans);


//table of n
for(let i=0;i<n;i++){
    mul=n*i;
    console.log("table of  n",n,'x',i,'=',mul);
}


//Prime number
if(n<=1){
    isprime=false;
}else{
    for(let i=2;i<n;i++){
        if (n%i==0) {
            isprime=false;
            break;
        }
    }
}
if (isprime) {
    console.log(n," is a prime number");
}else{
    console.log(n," is not a prime number");
}


//Armstrong number
while(n>0){
    let digit=n%10;
    sum=sum+(digit*digit*digit);
    n=Math.floor(n/10);
}
if(sum===OriginalNum){
    console.log(OriginalNum," is a armstrong number")
}else{
    console.log(OriginalNum," is not a armstrong number");
}


// Factors of  n
console.log(`Factors of ${num}`);
for(let i=1;i<=num;i++){
    if(num%i===0){
console.log(i)
    }
}
 
 
