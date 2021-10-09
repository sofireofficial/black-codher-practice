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
console.log(menu[0]);

for (let i = 0; i < menu.length; i++) {
        for (let j = 0; j < num.length; j++) {
            console.log(i);
            // console.log(menu[i]);
            
        }    
};

// practicing map (made up task)

const sophiasMeals = [
    {Lunch: 'Sandwich', Dinner: 'Fish n chips'},
    {Lunch: 'Salad', Dinner: 'Soup'},
    {Lunch: 'Late breakfast', Dinner: 'Rice n peas'}
]

console.log(sophiasMeals.map((food) => (food.Dinner)));

sophiasMeals.map((food) => (console.log(food.Dinner)));

console.log(sophiasMeals.map((food) => {return {Lunch: food.Lunch.toUpperCase(), Dinner: food.Dinner.toUpperCase()}}));

const x = (parameterHer) => parameterHer.toUpperCase();
console.log(x('Hello'));



// Practicing appending (Andy helped!)

                        // Remember...
                        // console.log(document.body.textContent="This replaces all children in element"); 
                        // console.log(document.body.textContent=sophiasMeals); 

                        // console.log(document.getElementById('ContainerRight'));
                        // console.log(document.getElementById('DoesNotExist'));
                        // document.getElementById('ContainerRight').textContent='hiya';

const divContainer = document.querySelector('#ContainerLeft');                    
                        // console.log(divContainer);
const newParagraph = document.createElement('p');
newParagraph.textContent='new paragraph content';
                        // console.log(newParagraph);
                        // paragraph exists, but we want to add it to the DOM

divContainer.append(newParagraph);
divContainer.append('anotherNewParagraph');
document.querySelector('#ContainerLeft').append('AndAnotherNewParagraph');
