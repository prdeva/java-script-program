
for(let i=1;i<=100;i++)
    {
        if ( i%5==0 && i%3==0 )
            document.write("FIZZBUZZ");
        else if ( i%3==0 )
            document.write("FIZZ");
        else if ( i%5==0 )
            document.write("BUZZ");
        else
        document.write("Invaid Input");
    }






    //Write a function that converts a temperature from Celsius to Fahrenheit
    function convert(Celsius){
        let  Fahrenheit=9/5*Celsius+32;
        return Fahrenheit;
    }

        let Celsius=200;
        console.log(convert(Celsius));


//Write a function that takes an array of numbers and returns the largest number
     
        
        const num=[1,2,3,4,5,6,7,8];
        const largestnum=Math.max(...num)
        console.log(largestnum)



        ///palindrome
        function palindrome(word){
            let n=word;
            let new_word=word.split('').reverse().join('');
            if(n==new_word){
                console.log("Palindrome");
            }
            else{
                console.log("Not a Palindrome");
            }
        }
        let text="deva";
        palindrome(text);


        //factorial
        function fact(m){
            let sum=1
            for(let i=1;i<=m;i++)
                sum=sum*i
            return sum
        }
        let m=4
        console.log(fact(m));


        ///missing number in array

 function num2(arr)
 {
    let count=1;
    for(let i=0;i<=arr.length;i++)
        if(count!=arr[i])
            return count
        else
            count++
        
 }
 let arr1=[1,2,3,4,5,6,8,9]
 console.log(num2(arr1))
   
   