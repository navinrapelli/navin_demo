var form1=document.forms.calform;
var s=document.getElementById("message");

var p=form1.add;
var l=form1.sub;

var n=form1.mul;
var q=form1.div;


var r=form1.expo;
var o=form1.mean;

p.onclick=function()
{
      
    var num=prompt("enter first value");
    var num1=prompt("enter second value");

   

    s.innerHTML= parseInt(num)+parseInt(num1);


}


l.onclick=function()
{
      
    var num=prompt("enter first value");
    var num1=prompt("enter second value");

   

    s.innerHTML= parseInt(num)-parseInt(num1);


}


n.onclick=function()
{
      
    var num=prompt("enter first value");
    var num1=prompt("enter second value");

   

    s.innerHTML= parseInt(num)*parseInt(num1);


}


q.onclick=function()
{
      
    var num=prompt("enter first value");
    var num1=prompt("enter second value");

   

    s.innerHTML= parseInt(num)/parseInt(num1);


}

r.onclick=function()
{
      
    var num=prompt("enter base value");
    var num1=prompt("enter power value");

   

    s.innerHTML= Math.pow(parseInt(num), parseInt(num1));


}

o.onclick=function()
{
      
    var num=prompt("enter first value");
    var num1=prompt("enter second value");

   

    s.innerHTML= (parseInt(num)+parseInt(num1))/2;


}