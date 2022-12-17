function findSmallArray(input){
    let small=input[0];
    for(let i=1;i<input.length;i++){
        if(input[i].length<small.length){
            small=input[i];
        }
    }
    return small;
}
let arrayString=["deepa","AA","nidhii","ilan"];   // array of string

console.log(findSmallArray(arrayString));
