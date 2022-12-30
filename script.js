/**********************************************************
Correcteur: Yannick GOUGUIA
Super travail, code bien documenté et tres lisible

👌👌👌👌

*********************************************************/


// =========================================== EXERCICE1 ============================================

// Store your favorite food into a variable.
let food = "chocolat";
// Enregistrez votre repas préféré de la journée dans une variable
let diner = "diner";
// Console.logI eat <favorite food> at every <favorite meal>
console.log('I eat ' + food + ' at every ' + diner);


// ========================================== EXERCICE 2 ============================================


// Part I

const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

//1- Create a variable named myWatchedSeriesLength that is equal to the number of series in the myWatchedSeries array.
let myWatchedSeriesLength = myWatchedSeries.length;
console.log(myWatchedSeriesLength);

//2- Create a variable named myWatchedSeriesSentence, that is equal to a sentence describing the series you watched
let myWatchedSeriesSentence = myWatchedSeries.toString();
console.log(myWatchedSeriesSentence);

//3- Console.log a sentence using both of the variables created above
console.log("I watched " + myWatchedSeriesLength + " : " + myWatchedSeriesSentence);


// Part II

//1- Change the series “the big bang theory” to “friends”. Hint : You will need to use the index of “the big bang theory” series.
myWatchedSeries[2] = "friend";
console.log(myWatchedSeries);

//2- Add, at the end of the array, the name of another series you watched.
myWatchedSeries.push("Titanic");
console.log(myWatchedSeries);

//3- Add, at the beginning of the array, the name of your favorite series
myWatchedSeries.unshift("La cassa de papel");
console.log(myWatchedSeries);

//4- Delete the series “black mirror”.
myWatchedSeries.splice(1,1);
console.log(myWatchedSeries);

//5- Console.log the third letter of the series “money heist”.
console.log(myWatchedSeries[1].substring(2,3));

//6- Finally, console.log the myWatchedSeries array, to see all the modifications you’ve made.
console;log(myWatchedSeries);



// ========================================== EXERCICE 3 =============================================

//1- Store a celsius temperature into a variable

let temperatureCelcius = 32;
console.log(temperatureCelcius + " ° C");

//2- Convert it to fahrenheit and console.log
let temperatureFahrenheit = (temperatureCelcius/5) * 9 + 32;
console.log(temperatureFahrenheit + " ° F");


// ======================================= EXERCICE 4 ==============================================

let c;
let a = 34;
let b = 21;

console.log(a+b) //first expression
// Prediction:55 It will output 55, because a and b are numbers
// Actual:55

a = 2;

console.log(a+b) //second expression
// Prediction: 23 It will output 23, because a and b are numbers
// Actual:23

// 1)
 a + b = 55

// 2)
 a + b = 23

// 3)
 c = undefined

console.log(3 + 4 + '5') // 75;
// 3 and 4 are number, c is a string


// ====================================== EXERCICE 5 ================================================

typeof(15)
// Prediction: number
// Actual: number
console.log(typeof(15));

typeof(5.5)
// Prediction: float
// Actual: number
console.log(typeof(5.5));

typeof(NaN)
// Prediction:
// Actual:number
console.log(typeof(NaN));

typeof("hello")
// Prediction: string
// Actual: string
console.log(typeof("hello"));

typeof(true)
// Prediction: boolean
// Actual: boolean
console.log(typeof(true));

typeof(1 != 2)
// Prediction:boolean
// Actual: boolean
console.log(typeof(1 != 2));

"hamburger" + "s"
// Prediction: string
// Actual: string
console.log("hamburger" + "s");

"hamburgers" - "s"
// Prediction: string
// Actual:number
console.log("hamburgers" - "s");

"1" + "3"
// Prediction: string
// Actual: string
console.log("1" + "3");

"1" - "3"
// Prediction: string
// Actual: string
console.log("1" - "3");

"johnny" + 5
// Prediction: string
// Actual: string
console.log("johnny" + "5");

"johnny" - 5
// Prediction: number
// Actual: number
console.log("johnny" - "5");

99 * "hello"
// Prediction: string
// Actual:NaN
console.log(99 * "hello");

1 != 1
// Prediction: boolean
// Actual: false
console.log(1 != 1);

1 == "1"
// Prediction: boolean
// Actual: true
console.log(1 == 1);


1 === "1"
// Prediction: boolean
// Actual: true
console.log(1 === 1);


// ================================================= EXERCICE 6 =====================================

5 + "34"
// Prediction: 534
// Actual: 543
console.log(5 + "34");

5 - "4"
// Prediction: -1 the value "4" is converted to a number 
// Actual:-1 
console.log(5 - "4");

10 % 5
// Prediction: 0
// Actual: 0
console.log(10 % 5);

5 % 10
// Prediction:5
// Actual:5
console.log(5 % 10)

"Java" + "Script"
// Prediction: string
// Actual: undefined
console.log("Java" + "Script");

" " + " "
// Prediction:string
// Actual:undefined
console.log(" " + " ");

" " + 0
// Prediction: string because " " is a string
// Actual: 0
console.log(" " + 0);

true + true
// Prediction: boolean
// Actual:2
console.log(true + true);

true + false
// Prediction:boolean
// Actual:1
console.log(true + false);


false + true
// Prediction: boolean
// Actual:1
console.log(false + true);


false - true
// Prediction: boolean
// Actual: -1
console.log(false - true);

!true
// Prediction: false because ! is not
// Actual: false 
console.log(!true);

3 - 4
// Prediction: -1 because 3 and 4 are number
// Actual: -1
console.log(3 - 4);

"Bob" - "bill"
// Prediction: NaN because "Bob" and "bill" are string
// Actual: NaN
console.log("Bob" - "bill");
