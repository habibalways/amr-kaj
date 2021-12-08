const devs = [
    ['Habib','20','laravel',2000],
    ['Emon','30','django',1800],
    ['asad','40','Golang',2200],
    ['josim','50','wordpress',5000],
    ['sojib','60','java',7000],
    ['rakib','70','laravel',8000],
    ['robin','45','django',9000],
    ['monir','35','Golang',1000],
    ['faruk','33','wordpress',6000],
    ['shamim','27','java',3000],
]

let sum = 0;

for (let h = 0; h < devs.length; h++) {
    console.log(`

        name :   ${ devs[h][0] }
        age  :   ${ devs[h][1] } year
        skill:   ${devs[h][2]}
     sellary :   ${devs[h][3]}$

    `);
    sum = sum + devs[h][3];
    
}
console.log(`total sellary of all developer = ${sum}$`);

// sum = 0;
// for (let i = 0; i < devs.length; i++) {
//     if (devs[i][1] == ' laravel') {
//         console.log(devs[i]);
//         sum = sum + devs[i][2];
//     }
//     console.log('======================');

// }
// console.log( `total laravel developer's amount`+ " " + sum);


