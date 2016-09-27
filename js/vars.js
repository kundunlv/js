var arr = [ 1, 2, 3, 4, 5, 6, 7 ];

var arrLength = arr.map(function(elem){
    return elem.length
});

var newArr = [],
totalSum = arr.reduce(function(sum, cur) {
    newArr.push(sum)
    return sum + cur;
});

newArr.push(totalSum)

/*----------------------------------------------------*/

var users = [{
  name: "Вася",
  surname: 'Иванов',
  age: 20
}, {
  name: "Петя",
  surname: 'Чапаев',
  age: 25
}, {
  name: "Маша",
  surname: 'Медведева',
  age: 18
}];

