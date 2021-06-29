/*var n=2021;
c=0;
count=0;

while(count!=20)
{

     c=n%4;

     if(c==0)
     {
         count++;
         document.write(n+"<br>");


     }


     n++;
      


}*/



 
 /*n=[2,6,45,33];
 
temp=0;


for(i=0;i<n.length;i++)
{
    for(j=0;j<n.length;j++)
      {
           
        if(n[j]<n[j+1])
		    	{
		       temp=n[j];
		       n[j]=n[j+1];
		       n[j+1]=temp;
		    	
            }
       

    }

}*/

/*
 
 var n=[2,6,45,33];
 

for(var i=n.length;i>=0;i--)
{
    document.write(n[i]);

}
*/

/*var n=[2,6,45,33];
 
var num=prompt("enter the number you want to foun");
for(i=0;i<=n.length;i++)
{
      if(num==n[i])
      {

          document.write("You enter number is preset in list");

      }


}

document.write("Your enter number is not present in list"); */


/*var n=[2,6,45,33,78,5,6,34];
 

for(i=1;i<=n.length;i=i+2)
{
    
    document.write(n[i]+" ");


}*/



for(i=0;i<3;i++)
{
  var nav=[];

    nav[i]=prompt("enter the number");



    document.write(nav[i]+" ");



     v=0;
      
    while(v<nav[i])
    {

    
        document.write("@");
    
     
    v++;

    }

    



}


