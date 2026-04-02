let users = [
  {
    name: "Riya Mehta",
    pic: "https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?w=600&auto=format&fit=crop&q=60",
    bio: "living slow, thinking deep",
  },
  {
    name: "Kavya Sharma",
    pic: "https://images.unsplash.com/photo-1560087637-bf797bc7796a?w=600&auto=format&fit=crop&q=60",
    bio: "soft heart, sharp mind",
  },
  {
    name: "Ananya Verma",
    pic: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&auto=format&fit=crop&q=60",
    bio: "creating my own vibe daily",
  },
  {
    name: "Ishita Kapoor",
    pic: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&auto=format&fit=crop&q=60",
    bio: "confidence over everything",
  },
  {
    name: "Sneha Joshi",
    pic: "https://images.unsplash.com/photo-1602442787305-decbd65be507?w=600&auto=format&fit=crop&q=60",
    bio: "lost in thoughts, found in peace",
  },
  {
    name: "Pooja Singh",
    pic: "https://images.unsplash.com/photo-1485875437342-9b39470b3d95?w=600&auto=format&fit=crop&q=60",
    bio: "quiet but powerful energy",
  },
  {
    name: "Neha Arora",
    pic: "https://images.unsplash.com/photo-1584720223124-466ff369e7c2?w=600&auto=format&fit=crop&q=60",
    bio: "less talk, more action",
  },
];

function showUsers(arr) {
  arr.forEach(function (user) {
    let card = document.createElement("div");
    card.classList.add("card");

    // img
    let img = document.createElement("img");
    img.setAttribute("src", user.pic);
    img.classList.add("bg-img");

    // blurred layer
    let blur = document.createElement("div");
    blur.style.backgroundImage = `url(${user.pic})`;
    blur.classList.add("blurred-layer");

    // content div
    let content = document.createElement("div");
    content.classList.add("content");

    // h3
    let h3 = document.createElement("h3");
    h3.textContent = user.name;

    // p
    let p = document.createElement("p");
    p.textContent = user.bio;

    // append structure
    content.appendChild(h3);
    content.appendChild(p);

    card.appendChild(img);
    card.appendChild(blur);
    card.appendChild(content);

    // add to body (or any container)
    document.querySelector(".cards").appendChild(card);
  });
}
showUsers(users);
let inp = document.querySelector("input");
function findUser() {
  let newUsers = users.filter((user) => {
    return user.name.startsWith(inp.value);
  });
  document.querySelector(".cards").innerHTML = "";
  showUsers(newUsers);
}
inp.addEventListener("input", findUser);
