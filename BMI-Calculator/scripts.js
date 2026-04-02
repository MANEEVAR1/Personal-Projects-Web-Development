//* BMI Calculator v1

let inputs = document.querySelectorAll("input");
console.log(inputs);

let form = document.querySelector("form");
let p = document.querySelector(".num-val");
let h5 = document.querySelector(".th-val");
let a = document.querySelector("a");
let ctg = document.querySelector(".category p");
let ctg1 = document.querySelector(".category");
let para = document.createElement("p");
// para.textContent = `BMI results disappearing in ${sec} seconds`;
// para.classList.add("max-sm:text-xl")
para.style.textAlign = "center";
para.style.fontFamily = "Lucida Sans";
para.style.fontWeight = "600";
// para.style.fontSize = "14px";
para.style.textWrap = "nowrap";
para.style.position = "relative";
// para.style.bottom = "2px";
// ctg.style.border = "2px solid red"
ctg.insertAdjacentElement("afterend",para);
let time;
function bmiCalculator() {
  clearInterval(time)
  for (const input of inputs) {
    if (input.value.trim() === "" && input.value !== "submit") {
      alert("Enter Valid Value(s) for BMI Calculation");
      return;
    }
    if (input.value <= 0) {
      alert("Enter Valid Value(s) for BMI Calculation");
      inputs.forEach(function (input) {
        if (input.type !== "submit") input.value = "";
      });
      return;
    }
  }
  let height = (inputs[1].value / 100) ** 2; //* input in cm is converted into m²
  let bmi = (inputs[2].value / height).toFixed(1); //* formula for BMI calculation
  p.textContent = `${bmi} kg/m²`;
  h5.textContent = `is the BMI for ${inputs[0].value}.`;
  h5.append(a);
  a.textContent = "BMI";
  // a.style.fontSize = "24px"
  if (bmi < 18.5) {
    ctg.textContent = "Underweight";
    ctg.style.color = "blue";
    ctg.style.fontStyle = "italic";
  }
  if (bmi >= 18.5 && bmi <= 24.9) {
    ctg.textContent = "Healthy Weight";
    ctg.style.color = "green";
    ctg.style.fontStyle = "italic";
  }
  if (bmi >= 25 && bmi <= 29.9) {
    ctg.textContent = "Overweight";
    ctg.style.color = "#F87C63";
    ctg.style.fontStyle = "italic";
  }
  if (bmi >= 30.0) {
    ctg.textContent = "Obese";
    ctg.style.color = "red";
    ctg.style.fontStyle = "italic";
  }
  inputs.forEach(function (input) {
    if (input.type !== "submit") input.value = "";
  });
  let sec = 10;
  time = setInterval(() => {
    if (sec > 0) {
      para.textContent = `BMI results disappearing in ${sec} second(s)`;
      para.style.fontSize = "clamp(16px, 1.5vw, 24px)"
      sec--;
    } else {
      clearInterval(time);
      p.textContent = "BMI Loading....";
      h5.textContent = "";
      ctg.textContent = "Loading....";
      ctg.style.color = "black";
      para.textContent = "";
    }
  }, 1000);
}

let calcBtn = document.getElementById("btn");
calcBtn.style.borderRadius = "20px";
calcBtn.addEventListener("click", bmiCalculator);
