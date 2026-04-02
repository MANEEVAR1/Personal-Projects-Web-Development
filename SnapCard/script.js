let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");
let main = document.querySelector("#main");
//TODO
form.addEventListener("submit", function (evt) {
  evt.preventDefault(); //* prevents reloading of form on submitting
  for (let input of inputs) {
    if (input.type !== "submit" && input.value.trim() === "") {
      alert("Enter Valid Information for Card Creation");
      return;
    }
  }
  //* creation of template
  //TODO parent div component
  let card = document.createElement("div");
  card.classList.add("card");
  //TODO pfp div component
  let pfp = document.createElement("div");
  pfp.classList.add("pfp");
  card.appendChild(pfp); //* appending pfp into card
  //TODO img component
  let img = document.createElement("img");
  img.setAttribute("src", inputs[0].value); //* attribute set
  pfp.appendChild(img); //* appending into pfp div
  //TODO name component
  let h3 = document.createElement("h3");
  h3.textContent = `${inputs[1].value}`; //* dynamic value entry
  card.appendChild(h3); //* appending into card
  //TODO occupation component
  let h5 = document.createElement("h5");
  h5.textContent = `${inputs[2].value}`; //* dynamic value entry
  card.appendChild(h5); //* appending into card
  //TODO bio component
  let paragraph = document.createElement("p");
  paragraph.textContent = `${inputs[3].value}`; //* dynamic value entry
  card.appendChild(paragraph); //* appending into card
  //TODO card appending into main div
  main.append(card);
  //TODO automatic form reset on submitting
  inputs.forEach(function (inp) {
    if (inp.type !== "submit") {
      inp.value = "";
    }
  });
});