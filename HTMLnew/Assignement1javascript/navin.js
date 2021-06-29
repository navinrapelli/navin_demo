//Q1 for Even and odd

function checkoddoreven(n)

{
if(n%2==0)
{

    console.log("The given number is even");

}
else
{

   
    console.log("The given number is odd");

}

}


//Q2 for Max

function max1(a,b,c)
{
    if(a>b && a>c)
    {

        console.log(a +" is max")

    }
    else if( b>c )
    {
        
        console.log(b +" is max");

    }
    else{

       
        console.log(c +" is max");

    }



}


//Q5 for String Concatinating

function padchart(a,b)
{   

     i=0;
      
    while(i<=a)
    {

    console.log(b);
    document.write(b);
     
    i++;

    }

    



}


//Q3 and Q4 for flip coin and heads count


function coinFlip(n) {
     var k=n;
    count=0;
    while(n!=0)
    {
    
    var x= (Math.floor(Math.random() * 2) == 0) ? 'heads' : 'tails';


    if(x==="heads")
    {

       count++;
     }

                 n--;

    }

    var v=count/k;

    console.log(count);
    console.log(v);
}


//Q6 numbers of die 6

function numRollsToGetSix()
{
    count=0;

    


    while(v!=6)
    {
    var v=(Math.floor(Math.random() * 10)) + 1;

     console.log(v);

        
        count++;

    
    }


    console.log(count);


}

//Q=2.1 Araay of random numbers 

function fournums()
{

        var i=0;
      var array1=[];

      while(i!=4)
      {
     
        var v=(Math.floor(Math.random() * 100)) + 1;

        array1[i]=v;
        i++


      }

     console.log(array1);

}

//Q=2.2 Araay of random numbers 100

function fournums1()
{

        var i=0;
      var array1=[];

      while(i!=101)
      {
     
        var v=(Math.floor(Math.random() * 100)) + 1;

        array1[i]=v;
        i++


      }

     console.log(array1);

}






//Q=2.3 string to array

function stringtoarray(n)
{

     
      var array=[];

      for(i=0;i<n.length;i++)
    
      {
             array[i]=parseInt(n[i])
    


      }

      console.log(array);

}


//Q=2.5 consecative String not containa b

function n(a,b,c)
{   return (a+b)/c;}







//double functioin


var double=function(x)
{

    return x*x;


}


var triple=function(a)

{

    return a*2;



}


var v=function(g)
{

    return g*2;


}


function navin( double,triple,c)
{

       var n =double(c);

       var x=triple(n);

     return v(x);
}


///2nd q for function

var f1=function(a)

{

    return a*2;



}


var f2=function(g)
{

    return g*2;


}


function navins( f1,f2)
{

       var n =f1(c);

       var x=f2(n);

     return x;
}


//function q 3

var arry=[];
function map1(arry,b)
{     
    if(b=="sqaure")

    {

      for(i=0;i<arry.length;i++)
      {

         arry[i]=arry[i]*arry[i];




      }


      console.log(arry);
    }

      else if(b=="squareroot")

    {

      for(i=0;i<arry.length;i++)
      {     p=arry[i]

         arry[i]=Math.sqrt[p];




      }


      console.log(arry);
    
    }



}

//5 is even

var isEven=function(a)
{


     return a%2;


}


var arry1=[];
function find1(arry1,isEven)
{
      for(j=0;j<=arry1.length;j++)

      {
               n=isEven(arry1[j])

               if(n==0)
               {
                        console.log(arry1[j]);


               }
      }

}