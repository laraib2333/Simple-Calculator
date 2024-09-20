function add()
{
    var addno1=parseInt(document.getElementById("First").value);
    var addno2=parseInt(document.getElementById("Second").value);
    var result=addno1+addno2;
    document.getElementById("result").value=result;
}
function sub()
{
    var addno1=parseInt(document.getElementById("First").value);
    var addno2=parseInt(document.getElementById("Second").value);
    var result=addno1-addno2;
    document.getElementById("result").value=result;
}
function mul()
{
    var addno1=parseInt(document.getElementById("First").value);
    var addno2=parseInt(document.getElementById("Second").value);
    var result=addno1*addno2;
    document.getElementById("result").value=result;
}
function div()
{
    var addno1=parseInt(document.getElementById("First").value);
    var addno2=parseInt(document.getElementById("Second").value);
    var result=addno1/addno2;
    document.getElementById("result").value=result;
}
function sqr()
{
    var addno1=parseInt(document.getElementById("First").value);
    var result=addno1*addno1;
    document.getElementById("result").value=result;
}
function per()
{
    var addno1=parseInt(document.getElementById("First").value);
    var addno2=parseInt(document.getElementById("Second").value);
    var result=((addno1+addno2)/500)*100;
    document.getElementById("result").value=result;
}
