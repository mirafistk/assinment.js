/*function factorial(n){
    var factorial = 1;
    for(var i =1;i <=n; i++){
        factorial = factorial*i;

    }
    return factorial
}
var result = factorial(50)
console.log(result);*/

/*function factorial(n){
    if(n==0){
        return 1;
    }
    else{
        return n*factorial(n-1)
    }
}
var result = factorial(0)
console.log(result);*/
function fibonacci(n){
    if (n==0){
        return 0;
    }
    if(n==1){
        return 1;
    }
    else{
        return fibonacci(n-1)+ fibonacci(n-2);
    }
}
var result = fibonacci(10);
console.log(result);