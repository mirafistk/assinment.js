var marks = [50,58,46,72,89,63,75,99];
var max = marks[0];
for(i= 0; i<marks.length; i++){
    var element = marks[i];
    if(element>max){
        max=  element;
    }
}
console.log('the highest valo is' , max)