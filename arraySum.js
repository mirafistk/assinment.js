
function getArraySum (numbers){
    var sum = 0;
for(var i=0; i<numbers.length;i++){
    var element = numbers[i];
    sum = sum+element;

}
return sum;
}
var numbers = [55,888,444,5,46,48,468,6655,78,];
var result = getArraySum(numbers);

console.log('total of the numbers:', result);
var total = getArraySum([50,88,25]);
console.log(total);