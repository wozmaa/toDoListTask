const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
const result = document.querySelector("#result");

btn.addEventListener('click', (e) => {
  if (input.value === "") return;
  createDeleteElements(input.value);
  input.value = "";
});

const createDeleteElements = (value) => {
  console.log(value);

  const li = document.createElement("li");
  const btn = document.createElement("button");

  li.classList.add("li")
  li.textContent = value;

  li.classList.add("btn")
  li.appendChild(btn)

  btn.addEventListener('click', (e) => {
      result.removeChild(li)
  })

  li.addEventListener("click", (e) => {
      li.classList.toggle('li-active')
  })

  result.appendChild(li)
};
