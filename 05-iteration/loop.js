// for(let initialization; condition; increment/ decrement){//code}
/*
for(let i = 0; i<11; i++){
    const element = i;
    if(element == 5){
        console.log("Here is number 5");
    break;
}
    // console.log(element);
    
}
*/

//  for(let i = 0; i <= 3; i++){
//      console.log(`Outer loop ${i}`);
//     for(let j = 0; j <= 3; j++){
//         console.log(`Inner loop value ${j} and outer loop ${i}`);
//     }
// }

//? Output
/*
Outer loop 0
Inner loop value 0 and outer loop 0
Inner loop value 1 and outer loop 0
Inner loop value 2 and outer loop 0
Inner loop value 3 and outer loop 0
Outer loop 1
Inner loop value 0 and outer loop 1
Inner loop value 1 and outer loop 1
Inner loop value 2 and outer loop 1
Inner loop value 3 and outer loop 1
Outer loop 2
Inner loop value 0 and outer loop 2
Inner loop value 1 and outer loop 2
Inner loop value 2 and outer loop 2
Inner loop value 3 and outer loop 2
Outer loop 3
Inner loop value 0 and outer loop 3
Inner loop value 1 and outer loop 3
Inner loop value 2 and outer loop 3
Inner loop value 3 and outer loop 3
*/

//* Table
//  for(let i = 1; i <= 3; i++){
//      console.log(`\nOuter loop ${i} `);
//     for(let j = 1; j <= 5; j++){
//         console.log(`${i} * ${j} = ${i * j}`);
//     }
// }

let myArr = ["Thor", "Hulk", "Iron Man", "Spider Man", "Wonder"];
for(let i = 0; i < myArr.length; i++){
     console.log(myArr[i]);
}

//? pattern
/* for(let i = 0; i < 10; i++){
    let row = "";
    for(let j = 0; j <= i; j++){
        row += " * ";
    }
    console.log(row);
}
*/