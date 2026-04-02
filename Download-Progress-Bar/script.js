// //* WAY-1
// let bar = document.querySelector("#bar-color");
// let percent = 0;
// let p = document.querySelector("p");
// let h3 = document.querySelector("h3");
// let interval = setInterval(() => {
//   if (percent < 100) {
//     percent += 33.3333333334;
//     bar.style.width = percent + "%";
//     p.textContent = `${percent.toFixed(0)}%`;
//     console.log(p.textContent);
//     if (percent >= 100) {
//       h3.textContent = "Download Completed Succesfully";
//       clearInterval(interval);
//     }
//   }
// }, 1000);

// //* WAY-2
let bar = document.querySelector("#bar-color");
let percent = 0;
let p = document.querySelector("p");
let h3 = document.querySelector("h3");
let interval = setInterval(() => {
  if (percent <= 99) {
    percent++;
    bar.style.width = percent + "%";
    p.textContent = `${percent.toFixed(0)}%`;
    console.log(p.textContent);
    if (percent >= 100) {
      h3.textContent = "Download Completed Succesfully";
    }
  }
}, 20);
