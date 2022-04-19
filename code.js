
function SetUpEventForDiv()
{
    var obj=document.getElementsByClassName("div1");
    obj.onclick=Div_1_Clicked;

}
function Div_1_Clicked(){
    var obj=document.getElementsByClassName("div1");
    obj.innerHTML=(new Date()).getSeconds();

}