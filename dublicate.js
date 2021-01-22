var nam = [50,56,56,8,1,8,2,50];
var uniqeName = [];
for(var i = 0; i<nam.length; i++){
    var element = nam[i];
    var index = uniqeName.indexOf(element);
    if(index == -1){
        uniqeName.push(element);
    }
}
console.log(uniqeName)