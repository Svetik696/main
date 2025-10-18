//number
let age=33;
console.log(age);

//BigInt
let aLargeNumber=123456789123456789n
console.log(aLargeNumber);

//string
let name='Svetlana';
console.log(name);

//boolean
let isLessSignificant=5<9;//менее значительный
console.log(isLessSignificant);//выведет true

let isMoreSignificant=5>9;//более значительный
console.log(isMoreSignificant);//выведет false

//null
let cat=null;//нет кота
console.log(cat);//выведет null

//undefined
let surname;//не присвоено значение переменной
console.log(surname);//выведет undefined

//object
let book= {
    title: "Выбор",
    author: "Эдит Ева Эгер",
    numderOfPages: 455
};
console.log(book.title);
console.log(book.author);
console.log(book.numderOfPages);

//typeof
console.log(typeof age); //number
console.log(typeof aLargeNumber);//bigint
console.log(typeof name);//string
console.log(typeof isLessSignificant);//boolean
console.log(typeof isMoreSignificant);//boolean
console.log(typeof cat);//object
console.log(typeof surname);//undefined
console.log(typeof book);//object

//Явное преобразование
//Строковое преобразование
let price=105;
console.log(typeof price);
price=String(price);
console.log(typeof price);

//Численное преобразование
let str="89";
console.log(typeof str);
let num=Number(str);//становится числом 89
console.log(typeof num);//number

let bigNumber=Number("Хочется спать");
console.log(bigNumber);//NaN преобразование не удалось

//Логическое преобразование
console.log(Boolean(""));//строка пустая, выводит false
console.log(Boolean("0"));//строка с нулем-это true
console.log(Boolean(" "));// пробел тоже true

//неявное преобразование
console.log('22'+8);//если один операнд является строкой,то второй также будет преобразован в строку
console.log(15-'3');//12, '3' приводится к числу
console.log('4'/'2');//2, обе строки проводятся к числу

//Операторы сравнения
console.log(35<66);//true
console.log(25>=26);//false
console.log(6==8);//false
console.log(9!=9);//false
console.log('Л'>'Р');//false
console.log('A'<'v');//true, т.к.А(U+0041),а v(U+0076)
console.log('Гигант'>'Лилипут');//false
console.log('5'<9);//true. Строка '5' приводится к числу 5
console.log('006'==7);//false, строка '006' приводится к числу 6, а 6 не равно 7
console.log(8===8);//true
console.log(1===0);//false