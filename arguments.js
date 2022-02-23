function add(num1, num2){
    console.log([...arguments]);
    return num1 + num2 + arguments[2];

}
const result = add(5, 12, 15, 10)
console.log(result);