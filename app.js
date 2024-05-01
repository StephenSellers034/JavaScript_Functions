console.log("Hello World!\n==========\n");

function printOdds(count){
if (count > 0){
   for(i = 1; i <= count; i++ ){
    if(i % 2 !== 0){
        console.log(i);
    }
   }
}
else{
    for(let i = -1; i >= count; i--){
        if(i % 2 !== 0){
            console.log(i);
           
        }
    }
}
}
printOdds(100);
printOdds(-100);
// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function checkAge(){
    let userName = prompt("Please enter your name:");
    let age = prompt("Please enter your age:");

    if(age >= 16){
        console.log(`Congrats ${userName}, you can drive!!`);
        
    }
    else{
        console.log(`Sorry ${userName}, you need to wait until you are 16`);
        
        }
}checkAge();
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function whichQuadrant(){
    let x = prompt("Please enter the first number:");
    let y = prompt("Please enter your second number:");
    if(x > 0 && y > 0){
        console.log("First Quadrant");
    }
    if(x < 0 && y > 0){
        console.log("Second Quadrant");
    }
    if(x < 0 && y < 0){
        console.log("Third Quadrant");
    }
    if(x > 0 && y < 0){
        console.log("Forth Quadrant");
    }
    if(x === 0 && y === 0){
        console.log("Origin");
    }
    if(x === 0 && y != 0){
        console.log("x-axis");
    }
    if(x != 0 && y === 0){
        console.log("y-axis");
    }
}
whichQuadrant();
console.log("EXERCISE 3:\n==========\n");

function triangleType(s1, s2, s3){
     if(s1 <= 0 || s2 <= 0 || s3 <= 0 || 
        s1 + s2 <= s3 || s1 + s3 <= s2 || s2 + s3 <= s1){
            return "Invalid Triangle";
        }
        else if(s1 === s2 && s2 == s3){
            return "Equilateral Triangle";
        }
        else if(s1 === s2 || s1 === s3 || s2 === s3){
            return "Isosceles Triangle";
        }
        else{
            return "Scalene";
        }
}
console.log(triangleType(1, 2, 2));
console.log("EXERCISE 4:\n==========\n");

// function dataPlan_avg(planLimit, day, usage){
//     planLimit = 100;
//     day = 15;
//     usage = 56;
//     var average = usage / day;
//     console.log(`Average daily use:${average}`);
//     if(usage / day == average){
//         console.log("You are exeeding your average daily use")
//     } 
//     if(usage > planLimit && day < 15){
//         console.log("")
//     }
// }

