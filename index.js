/** @format */

const data = [
  {
    id: 1,
    name: "Jennifer Aniston",
    job: "web developer",
    img: "./images/boss.jpeg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "Anjelina Jolly",
    job: "web designer",
    img: "./images/boss1.jpeg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "Lisa kudro",
    job: "intern",
    img: "./images/boss2.jpeg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "Lorel kudro",
    job: "the boss",
    img: "./images/boss3.jpeg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
  {
    id: 5,
    name: "Lorel kudro",
    job: "the boss",
    img: "./images/boss4.jpeg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
  {
    id: 6,
    name: "Lorel kudro",
    job: "the boss",
    img: "./images/boss5.jpeg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

const myImage = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomButton = document.querySelector(".random-btn");

let currentValue = 0;

window.addEventListener("DOMContentLoaded", function () {
  getCardPerson(currentValue);
});

function getCardPerson(item) {
  const person = data[item];
  myImage.src = person.img;
  author.textContent = person.name;
  job.textContent = person.job;
  info.textContent = person.text;
}

nextBtn.addEventListener("click", function () {
  currentValue++;
  if (currentValue > data.length - 1) {
    currentValue = 0;
  }
  getCardPerson(currentValue);
});

prevBtn.addEventListener("click", function () {
  currentValue--;
  if (currentValue < 0) {
    currentValue = data.length - 1;
  }
  getCardPerson(currentValue);
});

randomButton.addEventListener("click", function () {
  currentValue = Math.floor(Math.random() * data.length);
  getCardPerson(currentValue);
});
