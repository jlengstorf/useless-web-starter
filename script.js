/*
 * -----------------------------------------------------------------------------
 * Everything in this file is part of the demo and can be safely deleted.
 * 
 * If you want to add interactivity to your app, you can put it in this file.
 * -----------------------------------------------------------------------------
 */

let uselessClicks = 0;
document.querySelector('.useless-button').addEventListener('click', event => {
  event.preventDefault();
  
  const count = document.querySelector('.useless-count');
  count.innerText = ++uselessClicks;
});
