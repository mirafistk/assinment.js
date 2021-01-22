
// kilometerToMeter

function kilometerToMeter (kilometer){
    var meter = kilometer *1000;
    return meter;
}
 var myMeter = kilometerToMeter(5);
 console.log(myMeter)

// budgetCalculator 

function budgetCalculator(wacth, phone,laptop){
    var wacthPrice = wacth*50 ; 
    var phonePrice = phone*100 ; 
    var laptopPrice = laptop*500;
    var totalPrice = wacthPrice +phonePrice + laptopPrice;
    return totalPrice;

}
 var wacthPrice = budgetCalculator(7,0,0);
 var phonePrice = budgetCalculator(0,5,0);
 var laptopPrice = budgetCalculator(0,0,2);
 console.log(wacthPrice, phonePrice, laptopPrice);

var totalPrice = budgetCalculator(7, 5,2);
console.log(totalPrice);

// hotelCost

var days = 50;
var rhotelCost = 0;
if(days<=10){
    hotelCost = days*100;
}
else if(days<=20){
    var firstTenDays = 10*100;
    var remaining = days-10;
    var secondTenDays = remaining*80;
    hotelCost = firstTenDays +secondTenDays;
}
else{
    var firstTenDays = 10*100;
    var secondTenDays = 10*80;
    var remaining = days-20;
    var thirdDays =remaining*50;
    hotelCost = firstTenDays + secondTenDays + thirdDays;
}

console.log(hotelCost);

// megaFriend


function megaFriend(friendName){
return friendName.sort(function(min, max){
       return max.length - min.length;
    })[0]
    
}
var friendName = ['monirul' ,'rafi','sojib', 'sajjad Hossain']
var bigName = megaFriend(friendName);
console.log(bigName);


