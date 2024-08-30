const os=document.getElementById('os')
console.log(os);


function del()
{
    os.value=os.value.slice(0,-2)
  
}
function Clear()
{
    os.value= ""

}

function display(txt)
{
    os.value = os.value+txt;
    console.log(os.value)
}



function Calcluator()
{
    os.value=eval(os.value)
}
 
function squart()
{
    let a =prompt('Enter the a value');
    

    let res=a*a;
    alert(`the answer is ${res}`);
}


function Circle()
{
    let r  =prompt('Enter the a value');
    let res=3.14*r*r;
    alert(`The answer is ${res}`);
}
function Cube()
{
    let a  =prompt('Enter the a value');
    let res=a*a*a;
    alert(`The answer is ${res}`);
}
