// The Net Ninja below (I don't understand anything from 30.43mins)

const speak = function(time = 'default time here', name = 'default name here') {
    console.log(`Good ${time}, ${name}!`);
};

speak('morning', 'Sophia');
// Javascript hoists declarations, not expressions (remember ; after brackets here too)

const greet = () => 'Hello World';
let forConsole = greet();
console.log(forConsole);

// below is a method. They are function associated with an object or data type i.e string
let forConsole2 = forConsole.toUpperCase();
console.log(forConsole2);




// practicing loops (made up task)

const menu = ['pizzas', 'hotdogs', 'burgers'];
const num = [1, 2, 3, 4];

for (let i = 0; i < menu.length; i++) {
        for (let j = 0; j < num.length; j++)
    console.log(menu + num);
};

// practicing map (made up task)

const sophiasMeals = [
    {fridayLunch: 'Sandwich', fridayDinner: 'Fish n chips'},
    {saturdayLunch: 'Salad', saturdayDinner: 'Soup'},
    {sundayLunch: 'Late breakfast', sundayDinner: 'Rice n peas'}
]

sophiasMeals.map((food) => console.log(food.fridayDinner));