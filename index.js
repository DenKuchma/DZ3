const name = " Vasia"
if (typeof name == 'string'){
    console.log("Hello"  + name)
}
else{
    console.log("Error")
}


console.log(typeof (1))
console.log(typeof ('a'))


let vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
console.log(vegetables.join('|'))

data = 'Вася;Петя;Вова;Олег'
var arr = data.split(';');
console.log(arr)

function hello2(name){
    console.log("Hello "+ name);
}
hello2('Vasia')

const fruits = ['яблоко', 'ананас', 'груша'];
var fruitsInUpperCase = fruits.map(function(x) { return x.toUpperCase(); });
console.log(fruitsInUpperCase);


function addOneForAll(...rest){
    const val = rest.map(function(elem) {
        return elem + 1;
    });
    console.log(val);
}
addOneForAll(1, 2, 3, 4);



function getSum(...rest) {
    return rest.reduce((previous, current) => {
      return previous + current;
    });
}
const vall = getSum(1, 2, 3, 4);
console.log(vall);


const array = [1, 'hello', 2, 3, 4, '5', '6', 7, null];
const result = array.filter(function(elem) {
    return typeof elem === 'number' 

});
console.log(result);



function arrayTesting(arr) {
    let hasTrueValues = false;
    function check(item) {
      if (item == true) {
        return true;
      } else {
        return false;
      }
    }
    hasTrueValues = arr
      .some(check);
    if (hasTrueValues) {
      return "Нашли true значение";
    } else {
      return "Ничего нет";
    }
  }
console.log(arrayTesting([0, false, null, 1]));
console.log(arrayTesting([0, false, null, 0]));

