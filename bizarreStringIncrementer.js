// Start your implementation here
function bizarreStringIncrementer(bizarreString){

let patternMatcher = "/\d+/";
matches = bizarreString.match(/\d+/g); 
let numberStr =matches[matches.length-1];
let number =parseInt(numberStr);
if((number+1).toString().length=== numberStr.length){
    return bizarreString.replace(numberStr,parseInt(number)+1);
}else{ 
    return bizarreString.replace(numberStr,""+numberStr.charAt(0)+""+ (number+1));
}

}

module.exports = { bizarreStringIncrementer };