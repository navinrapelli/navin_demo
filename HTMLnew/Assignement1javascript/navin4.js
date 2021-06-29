var myform=document.forms.myform1;
var x=document.getElementById("three");





myform.onclick =function ()
{


    if(myform.one.value=="")
    {

        x.innerHTML="Plz enter the number in fernite"

    }

    else
    {
    
    x.innerText= (myform.one.value-32)*5/9;

    }

};