//string
let string="Svetlana";
console.log(string);
console.log(typeof(string));

//number
let age=33;
console.log(age);
console.log(typeof(age));

//bigint
let bigNum=12345678901234567890n
console.log(bigNum);
console.log(typeof(bigNum));

//boolean
let isLogged=true;
if (isLogged) {
    console.log("Пользователь вошел в систему");
} else {
    console.log("Пользователь не вошел в систему");
}

//null
let trash=null;
console.log(trash);
console.log(typeof(trash));

//undefined
let box;
console.log(box);
console.log(typeof(box));

//object
let book={
    title: "Выбор",
    author: "Эдит Ева Эгер",
    numberOfPages: 445,
}
console.log(book);
console.log(typeof(book));

//symbol
let mySymbol=Symbol('Описание моего символа');
console.log(mySymbol);
console.log(typeof(mySymbol));