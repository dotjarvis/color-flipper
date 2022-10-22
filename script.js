const backgroundColor = document.querySelector(`.background-color`);
const color = document.querySelector(`.color`);
const clickMe = document.querySelector(`.click-me`);

clickMe.addEventListener(`click`, function () {
  const colors = [
    `red`,
    `blue`,
    `yellow`,
    `green`,
    `tomato`,
    `yellow`,
    `turquoise`,
    `steelblue`,
    `tan`,
    `slateblue`,
    `seagreen`,
    `sienna`,
    `salmon`,
    `royalblue`,
    `orange`,
    `orangered`,
    `orchid`,
    `navy`,
    `lime`,
    `maroon`,
    `gold`,
    `magenta`,
    `chocolate`,
    `crimson`,
    `cyan`,
  ];

  const randomColor = Math.floor(Math.random() * colors.length);
  backgroundColor.style.backgroundColor = colors[randomColor];

  color.style.color = colors[randomColor];
  color.textContent = colors[randomColor];
});
