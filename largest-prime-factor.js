let num=prompt("Enter a number to find its largest prime factor");
let arr=[];//An array to store the prime factors
let numberOfFactors=0;//this counts the number of factors 
for(let i=2;i<num;i++){
    if(num % i===0){//to check the factors of the number
        for(let j=1;j<=i;j++){//a nested loop to check if the factor is prime
            if(i%j===0){
                numberOfFactors++;
            }
        }
        if(numberOfFactors===2){//to check the number prime factors
            arr.push(i);//add the number to the array storing the prime factors if its number of factors =2 
            numberOfFactors=0;//reassign the number of for next operation
        }
    } 
}
console.log(arr.pop());//this returns the last element in the array which is the largest