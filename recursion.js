function factorial(num){
    var fact = 1;
    // for(var i = 1; i<=num; i++){
    //     fact = fact*i;

    // }
    // return fact;
    if(num==1){
        console.log(num);
        return 1;
        
    }
    else{
        console.log(num, num-1);
        return num*factorial(num-1)
    }
}
var result = factorial(5)
console.log(result);