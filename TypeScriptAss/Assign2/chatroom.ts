let chat1user=['navin','narsing','venky'];
const messe=new Set();

let chat2user=['ashish','rohan','naga'];
const messe1=new Set();

let chat1=function(token:number,mess:string)
{

    if (token<=2)
    {

    
let messageschat1=new Map();

messageschat1.set(chat1user[token],mess);
console.log(messageschat1)

;
}

    
else
{
    console.log("ur token not mathced")
}
      messe.add(mess);
}






let chat2=function(token:number,mess:string)
{

    if (token<=2)
    {


let messageschat2=new Map();


messageschat2.set(chat2user[token],mess);
console.log(messageschat2);}
else
{
    console.log("ur token not mathced")
} 
     
     messe1.add(mess);
    

     
}
