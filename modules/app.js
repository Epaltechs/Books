/* eslint-disable*/
const time = document.querySelector('.date');
const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
];

const timer = () => {
  const date = new Date();
  const month = date.getMonth();
  const year = date.getFullYear();
  const day = date.getDate();
  time.innerHTML = `${monthNames[month]} ${day} ${year}, ${date.toLocaleTimeString()}`;
}

setInterval(timer, 1000);

export { timer }
