const year = 1964;
let reminder = year % 4;
if (reminder==0){
    console.log('your year is a leap year')
}
else{
    console.log( 'your year is not a leap year');
}