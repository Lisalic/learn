const namebox = document.getElementById("username");
const agebox = document.getElementById("age");
const hobbybox1 = document.getElementById("hobby1");
const hobbybox2 = document.getElementById("hobby2");
const button = document.getElementById("submit");
const cows = document.getElementsByName("cow")
const output = document.getElementById("outputhere");
const addbutton = document.getElementById("addbutton");
const add1 = document.getElementById("add1");
const add2 = document.getElementById("add2");
const addoutput = document.getElementById("addoutput");
const subtractbutton = document.getElementById("subtractbutton");
const sub1 = document.getElementById("subtract1");
const sub2 = document.getElementById("subtract2");
const suboutput = document.getElementById("subtractoutput")
const cow_opinion_generator = ()=>
{
  let cowanswer = "don't know";
  for (const radio of cows)
  {
    if (radio.checked){
      if (radio.value == "True")
      {
        cowanswer = "like"
      }
      else
      {
        cowanswer = "don't like"
      }
      break
    }
  }
  return cowanswer
};

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
button.addEventListener("click", () => 
{
  const text = namebox.value;
  const age = agebox.value;
  const hobby1 = hobbybox1.value;
  const hobby2 = hobbybox2.value;
  const cowanswer = cow_opinion_generator();
  output.innerHTML = `
    <strong>Hello, ${text}!</strong><br>
    You are ${age} years old.<br>
    You ${cowanswer} cows.<br>
    Your hobbies are: ${hobby1} and ${hobby2}.
  `;
}
);
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
  Messi has ${addcows(Number(sub1.value),-Number(0))} cows. Selfish boy Messi!`
})