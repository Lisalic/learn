const namebox = document.getElementById("username");
const agebox = document.getElementById("age");
const hobbybox1 = document.getElementById("hobby1");
const hobbybox2 = document.getElementById("hobby2");
const button = document.getElementById("submit");
const cows = document.getElementsByName("cow")
const output = document.getElementById("outputhere");

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
