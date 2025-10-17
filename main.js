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
