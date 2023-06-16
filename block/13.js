let showBlockBtn = document.getElementById('show-block','show-blockk');
let block = document.getElementById('block','blockk');

showBlockBtn.addEventListener('click', () => {
  block.classList.add('active');
});