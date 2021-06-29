//first Question
/*const na="on";
console.log(na);

na="oh";

console.log(na);*/
//Q2 Scoping
/*let naa="you"

if(naa=="you")
{
   let na1="me";
   console.log(naa);
    
   

}

console.log(naa);
console.log(na1);*/
//Q3
/*const id=2;
const title="Candy";
const price=200;

const Order={

  id,
  title,
  price,


      
  printOrder()
  {
         return ` ${this.id} is ${this.title}`;
    

  },

   getprice()
  {
         return this.price;
    

  }


};

console.log(Order);
console.log(Order.printOrder());
console.log(Order.getprice());


const n={


};


let om=Object.assign(n,Order);

console.log(om);
console.log(om.getprice());
console.log(om.printOrder());*/
//Q5
/*const add=function(a=2,b=5)
    {
          console.log(a+b);
}

add(5);*/
/*const userfriends=function(...userfriends1)
{
        console.log(...userfriends1);


}

userfriends("navin","=",'om','cm','pm');*/
/*let printCapitalNames=function(...om){
    
  for(let i in arguments)
  {

    console.log(arguments[i]);
  }


}
let color=['blue','pink','yellow'];

printCapitalNames(...color);*/
//Q6 template literals
/*type model=string;
type deskno=number;
type name=string;

let ticket=function(model,deskno,name){

    
      return `${model} is desktop model ${deskno} with dektop no ${name} user name`

}

let om=ticket("6uhl",56,"navin");
console.log(om);*/
//Q7 Destructuring
/*let names=['navin','pavan','venky'];

let[fistname,lastname,middle]=names;

console.log(names[2]);
console.log(middle);*/
/*const Orgnaization={


        name1:"navin",
        address:"1717 f2"

};


const {name1,address}=Orgnaization;

console.log(name1);
console.log(address);*/
//Q8 class and modles
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
