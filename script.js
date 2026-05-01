let num = [5, 1, 4, 3, 6 ];
let num2 = [3,2,1,5]


// Q2. largest first and second number.

// let largest = (num[0]);
// seclargest =(num [0]);
// console.log(num)
// for (let l of num) {
//     if (largest < l) {
//         largest = l
//     }
// } for(let e of num){
//     if (e < largest && e > seclargest){
//         seclargest = e ;
//     }
// }

// console.log("The firstlargest value is: ", largest)
// console.log("The secondlargest value is: ", seclargest)




// Q3.  smallest first and second number.

// let smallest = (num[0])
// let secsmallest = (num[1])

// for(let j of num){
//     if( smallest > j){
//         smallest = j
//     }
// }

// for(let m of num){
//     if( m > smallest && m < secsmallest){
//         secsmallest = m;
//     }
// }

// console.log("The firstsmallest value is: ", smallest)
// console.log("The secondsmallest value is: ", secsmallest)



// Q4. Find out the unique value.

// let uni = []
// console.log(num)

// for (let i of num) {
//     if (!uni.includes(i)){
//         uni.push(i)
//     }
// }

// console.log("The unique value is: ", uni)



// Q5. print a array in reverse order.

// console.log(num)
// let rev = []

// for(i of num){
//     // console.log(i)
//     rev.unshift(i)

// }
// console.log("The reverse order of array is; ",rev)




// Q6. merge two array.

// console.log(num)
// console.log(num2)
// for(i of num2){
//     num.push(i)
// }
// console.log(num)




// Q7. divisible by 5.

// let n = [10,45,22,35,68,9]
// let o = []

// console.log(n)
// for(let i of n){
//     if( i%5 == 0){
//         o.push(i)
//     }
// }
// console.log("The numbers divisible by 5: ",o)



// Q8.find out the common value in array.

// console.log(num)
// console.log(num2)
// let com = []
// for( let i of num){
//     for( let j of num2){
//         if( j==i){
//             com.push(j)
//         }
//     }
// }
// console.log("The value in both array",com)

// Q9. merge two array then findout the unique value.

// let uni = []

// console.log("array-1",num)
// console.log("array-2",num2)
// for(let i of num){
//     num2.push(i)
// }
// console.log("merged array: ",num2)

// for (let j of num2) {
//     if (!uni.includes(j)){
//         uni.push(j)
//     }
// }
// console.log("The unique values of both array are: ",uni)

// console.log(num2)
// for( let i of num2){
//     console.log(i*i)
// }

let n =5;

// for(let i=1; i<=n; i++){
//     for(let j=1; j<=i; j++){
//         document.write(" ",j)
//     }
//     document.write("<br>")
// }


// for(let i=1; i<=n; i++){
//     for(let j )
// }

let a = ["Raj","Anita","ice","orey","pradeep"];
let o = []
let vowelname = "aeiouAEIOU"

for(let i=0; i<a.length; i++){
    if( vowelname.includes(a[i][0]))
        o.push(a[i])
} 
console.log(o)