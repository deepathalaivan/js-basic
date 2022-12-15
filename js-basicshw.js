function countNumberOfChars(inputString){
    return inputString.length;
}
function findGreaterOfTwo(a,b)
{
    if(a>b){
        return a+ " is greater"
    }
        else {
        return b+ " is greater"
    }
}
function checkCondition(input)
{
    if(input>=7500 && input<=9999)
    return true
    else
    return false
}

console.log(countNumberOfChars("deepa"));
console.log(countNumberOfChars("deepaKalyanasundaram"));
console.log(findGreaterOfTwo(8,5));
console.log(checkCondition(9));

console.log(checkCondition(7500));
function getCubeRoot(input){
    return Math.cbrt(input);
}
console.log(getCubeRoot(27));
function inchesToFeet(inches){
    return inches/12;
}
console.log(inchesToFeet(12));
function degreesToFar(degrees){
    return (((degrees*9)/5)+32);

}
console.log(degreesToFar(100));
function kiloToPound(kilos){
    return kilos * 2.2;
}
function poundToKilo(pounds){
    return pounds / 2.2
}
 console.log(kiloToPound(2));
 console.log(poundToKilo(5));
 function findLongString(str1,str2){
    if(str1.length > str2.length) {
        return str1;
    } 
    else {
        return str2;
    }
 }
 
 console.log(findLongString("one","three"));

 function findShortestString(stringlist) {
    let [str1, ...str2] = [...stringlist];   // split the first element from array, rest of element to another array
    return str2.reduce(
        (acc, curr)=>{   //accumulator and current element of each iteration of reduce on str2
            if(acc.length > curr.length) {  //if acc length is greater than current element
                return curr;  //return current element ( which will be the new accumulator for next generation)
            }
            else {
                return acc;  //return accumulator element ( which will be the new accumulator for next generation)
            }
        },
     str1    // initial value of accumulator
    );  
 }

 console.log(findShortestString(["deepaKalyanasundaram", "deepaKalyanam", "deepa"]));





