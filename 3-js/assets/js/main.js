// jQuery
// $(document).ready(function() {
  // code
// });

// Vanilla JS

window.onload = function() {
  const $toggleMenuBtn = document.querySelector('#menu-button')
  const $menu = document.querySelector('#menu');
  const $videoCover = document.querySelector('#video-cover');
  const $videoPlayer = document.querySelector('#video-player');
  const $accordionItems = document.querySelectorAll('.item');
  const $factElement = document.querySelector('#wiki .extract');
  const $openModalBtn = document.querySelector('#button-modal');
  const $closeModalBtn = document.querySelector('#close-modal');
  const $modalWiki = document.querySelector('.modal-wiki');

  $toggleMenuBtn.addEventListener('click', () => {
    $menu.classList.toggle('-active');
  });

  $videoCover.addEventListener('click', () => {
    $videoPlayer.play();
  });

  $videoPlayer.addEventListener('playing', () => {
    if (!$videoCover.classList.contains('-inactive')) {
      $videoCover.classList.add('-inactive');
    }
  });

  $accordionItems.forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('-active')
    })
  })

   
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    const response = JSON.parse(this.responseText);
    $factElement.innerHTML = response.fact;
  }
  xhttp.open('GET', 'https://catfact.ninja/fact');
  xhttp.send();
  
  $openModalBtn.addEventListener('click', () => {
    $modalWiki.classList.add('-active');
  });

  $closeModalBtn.addEventListener('click', () => {
    $modalWiki.classList.remove('-active');
  });

};