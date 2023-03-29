//  function taxDeduction(sal ,_person ){
//     if(sal<300000){
//           console.log("no deduction");
//     }else if(sal>300000 && sal<600000){
//         console.log("with 10% dduction");
//         let deduction = (sal-300000)* 0.1;
//         console.log(`employee salary : ${sal} and with deduction of the salary: ${deduction}`);
//     }else if(sal>600000 && sal<1000000){
//         console.log("with 20% deduction");
//        let deduction1=30000;
//         let deduction2=(sal-600000)*0.2;
//          total=deduction1+deduction2;
//         console.log(`employee salary : ${sal} and with deduction of the salary: ${total}`);
//     }
// }
// taxDeduction(800000 , "jhb");



let person={fname:"simla",lname:"p",age:21};
for(let x in person){
    console.log(person[x]);
}