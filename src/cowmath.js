const addbutton = document.getElementById("addbutton");
const add1 = document.getElementById("add1");
const add2 = document.getElementById("add2");
const addoutput = document.getElementById("addoutput");
const subtractbutton = document.getElementById("subtractbutton");
const sub1 = document.getElementById("subtract1");
const sub2 = document.getElementById("subtract2");
const suboutput = document.getElementById("subtractoutput")
const multiplybutton = document.getElementById("multiplybutton");
const mul1 = document.getElementById("multiply1");
const mul2 = document.getElementById("multiply2");
const muloutput = document.getElementById("multiplyoutput");
const squarebutton = document.getElementById("squarebutton");
const squarecows = document.getElementById("squarecows");
const sqoutput = document.getElementById("squareoutput");
const cowname = document.getElementById("cowname");

function addcows(cow1,cow2){
    return cow1 + cow2
  };
  
  function multiplycows(cow1,cow2=1){
    return cow1*cow2
  };
  
  const squarecow = (cow) => cow **2;
  
  function calculate(operation_function,cow1,cow2=1){
    return operation_function(cow1,cow2)
  };
  
  addbutton.addEventListener("click",() =>
{
  addoutput.innerHTML = `
  Messi has ${addcows(Number(add1.value), Number(add2.value))} cows.
  `;
}
);
subtractbutton.addEventListener("click",() => 
{
  suboutput.innerHTML = `
  Messi has ${addcows(Number(sub1.value),-Number(0))} cows. 
  Selfish boy Messi! He would have had 
  ${addcows(Number(sub1.value),-Number(sub2.value))} cows.`
}
);

multiplybutton.addEventListener("click",() =>
{
  muloutput.innerHTML = `
  Messi has ${multiplycows(Number(mul1.value),Number(mul2.value))} baby cows.`
}
);

squarebutton.addEventListener("click",() =>
{
  sqoutput.innerHTML = `
  ${cowname.value} has ${calculate(squarecow,Number(squarecows.value))} cows.
  `
}
);
