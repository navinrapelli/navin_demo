/*class next {
    perviousNo:number;
    cureentNo:number;

     nextNumber:number

    constructor(perviousNo,cureentNo) {
       

       this.cureentNo=cureentNo;
       this.perviousNo=perviousNo;
        
    }

    next=function()
    {


            this.nextNumber=this.cureentNo+this.perviousNo;
          
            return "The next number of fibonasi series is ="+this.nextNumber;

    }

    
}

let om=new next(0,1);
console.log(om.next());*/
/*function amstrong()
{
    let Amarry=[];
      for(let i=100;i<=1000;i++)

      {

             

               var n = i;
               var d = 0;
               var s = 0;

               while (n > 0)
                {
                            d = n % 10;
                            s = s + (d * d * d);
                            n = n / 10;
                }
                if (i==s)
                 {
                   console.log(s);
                 }


      }



}

let a=amstrong();
console.log(a);*/
//Assignement 3 Q1 promise
/*const x=new Promise(function(resolve,reject){
    resolve(34);

 });





const y=new Promise(function(resolve,reject){
    resolve(64);

 });





Promise.all([x, y]).then((values) => {
    const total=values.reduce((x, y)=>x+y);

    console.log(`Results: ${values}`);
    console.log(`Total: ${total}`);

  }); */
//Assignment 3 Q3 Interfaces
/*interface printable{

   print:()=>string;

};

 const circle:printable={


    print: ():string =>{return "Circle is printing"}

}

let employee:printable={


    print: ():string =>{return "Employee is printing"}
    
}


const printall=function(circle:printable,employee:printable)
{

   
    console.log(circle.print())    ;
    
      
    console.log(employee.print())
      


}


printall(circle,employee);*/
//Assinment 3 Q3
/*class Account{
     
      name1:string
      balance:number;

     constructor(id, name1,balance)
     {
         this.id=id;
         this.name1=name1;
         this.balance=balance;


     }


}


class savingAccount extends Account{
     
       interest:number;
       totalbalnce1:number;
       totalbalnce=function (interest)
      {
             return this.totalbalnce1 =interest+this.balance;
            

      }


};

class currentAccount extends Account{


  credit_balnce:number;
  totalbalnce1:number;
  totalbalnce=function (credit_balnce)
 {
          this.totalbalnce1 =this.balance-credit_balnce;
       
          return "the total blance afterinterest is add ="+this.totalbalnce1;

 }


  

};


let b=new savingAccount(12,"pavan",4000)
let v=b.totalbalnce(3000);
console.log(v);

let s=new currentAccount(13,"venky",6000)

let x=s.totalbalnce(3000);
console.log(x);*/
