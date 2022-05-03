/* eslint-disable*/
const addnew = () => {
  document.getElementById('MyBookLibrary').style.display = 'none';
  document.getElementById('mylist').style.display = 'block';
  document.getElementById('contact').style.display = 'none';
  document.querySelector('.maybes').style.color = 'blue';
  document.querySelector('.maybey').style.color = '#000';
  document.querySelector('.maybe').style.color = '#000';
};

export { addnew };