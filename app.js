const form = document.querySelector("form");
const input = document.querySelector("input");
const div = document.querySelector("div");

const url = "https://restcountries.com/v3.1/name/";
const template = document.querySelector("template");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  fetch(url + input.value)
    .then((data) => {
      return data.json();
    })
    .then((posts) => {
      updateUi(posts);
    })
    .catch();

  function updateUi(data) {
    console.log(data[0]);
    div.innerHTML = "";

    const clone = template.content.cloneNode(true);

    const image = clone.querySelector("img");
    image.src = data[0].flags.svg;
    image.alt = data[0].flags.alt;
    image.width = 400;
    image.higt = 400;

    const name = clone.querySelector(".name");
    name.textContent = data[0].name.common;

    const capital = clone.querySelector(".capital");
    capital.textContent = data[0].capital;

    const continents = clone.querySelector(".continents");
    continents.textContent = data[0].continents;

    const population = clone.querySelector(".population");
    population.textContent = data[0].population;

    const tld = clone.querySelector(".tld");
    tld.textContent = data[0].tld;

    const borders = clone.querySelector(".borders");
    borders.textContent = data[0].borders;

    const area = clone.querySelector(".area");
    area.textContent = data[0].area;

    div.appendChild(clone);

    input.value = "";
  }
});

// const template = document.querySelector("template");
// function updateUi(data) {
//   data.forEach((post) => {
//     const clone = template.content.cloneNode(true);
//     const h3 = clone.querySelector("h3");
//     const p = clone.querySelector("p");

//     h3.textContent = post.title;
//     p.textContent = post.body;
//     document.querySelector("ol").appendChild(clone);
//   });
// }
