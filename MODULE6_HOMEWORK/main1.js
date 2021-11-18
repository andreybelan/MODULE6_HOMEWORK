// Заданиек № 1
// Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
// При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.
// На этот раз оформите решение в виде функции, постарайтесь дать этой функции корректное название, вызовите функцию, проанализируйте синтаксис.


function makeCounter() {

    var zeros = 0;
    var strs = 0;
    var countables = 0;
    var uncountables = 0;
    var nulls = 0;
  
    var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, null, 'table','chair',"stool"];
    for (i = 0; i < array.length; i++) {
  
      if (typeof array[i] == 'string') {
        strs++;
      } else if (array[i] == null) {
        nulls++;
      } else if (array[i] == 0) {
        zeros++;
      } else if (array[i] % 2 === 0) {
        countables++;
      } else {
        uncountables++;
      }
    }
  
    alert(`Нулей - ${zeros} \n Строк - ${strs} \n Нулл - ${nulls} \n Четных - ${countables} \n Нечетных - ${uncountables}`)
  
  }
  makeCounter()