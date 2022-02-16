const { fifaData } = require('./fifa.js')

// ⚽️ M  V P ⚽️ //

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Practice accessing data by console.log-ing the following pieces of data note, you may want to filter the data first 😉*/

//(a) Home Team name for 2014 world cup final
let result2 =[]
const result = fifaData.filter((obj)=> {return obj.Year === 2014 && obj.Stage === "Final"})
for(let i =0; i < result.length; i++)
   result2.push(result[0]['Home Team Name']) 

console.log(result2)

//(b) Away Team name for 2014 world cup final
let result3 = []
const result4 = fifaData.filter((obj) => {return obj.Year === 2014 && obj.Stage === "Final"})
for(let i= 0; i < result4.length ; i ++)
result3.push(result4[0]["Away Team Name"])
console.log(result3)
//(c) Home Team goals for 2014 world cup final
let goals = []
const goals1 = fifaData.filter((obj) => {return obj.Year === 2014 && obj.Stage === "Final"})
for (let i=0; i< goals1.length ; i ++ )
goals.push(result[0]["Home Team Goals"])
console.log(goals)
//(d) Away Team goals for 2014 world cup final
let awayGoals =[]
const awayGoals2 = fifaData.filter((obj)=> {return obj.Year === 2014 && obj.Stage === "Final"})
for(let i= 0; i <awayGoals2.length; i ++)
awayGoals.push(awayGoals2[0]["Away Team Goals"])
console.log(awayGoals)
//(e) Winner of 2014 world cup final */
let winnerGoals =[]
const winnerGoals2 = fifaData.filter((obj) =>{return obj.Year === 2014 && obj.Stage ==="Final"})
for(let i =0; i <winnerGoals2.length; i ++)
winnerGoals.push(winnerGoals2[0]["Winner Team Goals"])
console.log(winnerGoals)
/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use getFinals to do the following:
1. Receive data as a parameter
2. Return an array of objects with the data of the teams that made it to the final stage

hint - you should be looking at the stage key inside of the objects
*/

function getFinals(data){
const finalTeams = fifaData.filter((data)=> {return data.Stage === "Final"})
 return finalTeams
}



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function called getYears to do the following: 
1. Receive an array
2. Receive a callback function getFinals from task 2 
3. Return an array called years containing all of the years in the getFinals data set*/

function getYears(data, getFinalsCb) {

 return getFinalsCb(data).map(item =>item.Year)
}

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function getWinners to do the following:  
1. Receives an array
2. Receives the callback function getFinals from task 2 
3. Determines the winner (home or away) of each `finals` game. 
4. Returns the names of all winning countries in an array called `winners` */ 

function getWinners(data , getFinalsCb) {
return getFinalsCb(data).map(item => item["Home Team Goals"] > item["Away Team Goals"] ? item["Home Team Name"] : item["Away Team Name"])
  
}

console.log(getWinners(fifaData,getFinals))

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use the higher-order function getWinnersByYear to do the following:
1. Receive an array
2. Receive a callback function getFinals from task 2
3. Receive a callback function getYears from task 3
4. Receive a callback function getWinners from task 4
5. Return an array of strings that say "In {year}, {country} won the world cup!" 

hint: the strings returned need to exactly match the string in step 4.
 */
function getWinnersByYear(data,getFinalsCb, getYearsCB, getWinnersCB){
    const winners = getWinnersCB(data,getFinalsCb)
    const years = getYearsCB(data,getFinalsCb)
    return winners.map((item,index)=> `In ${years[index]}, ${item} won the world cup!`)
}


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher order function getAverageGoals to do the following: 
 1. Receive the callback function getFinals from task 2 ensure you pass in the data as an argument
 2. Return the the average number of the total home team goals and away team goals scored per match and round to the second decimal place. 
 
 (Hint: use .reduce and do this in 2 steps) 
 
 Example of invocation: getAverageGoals(getFinals(fifaData));
*/

function getAverageGoals(/* code here */) {
   /* code here */
}




/// 🥅 STRETCH 🥅 ///

/* 💪💪💪💪💪 Stretch 1: 💪💪💪💪💪 
Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

}



/* 💪💪💪💪💪 Stretch 2: 💪💪💪💪💪 
Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

}


/* 💪💪💪💪💪 Stretch 3: 💪💪💪💪💪
Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

}


/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */


/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo(){
    console.log('its working');
    return 'bar';
}
foo();
module.exports = {
    foo,
    getFinals,
    getYears,
    getWinners,
    getWinnersByYear,
    getAverageGoals
}
