
//shows or hides the burger menu button when clicked (for small screen).
const burgerMenu = document.getElementsByTagName('nav')[0];
function showbuttonMenu(){
  if(window.getComputedStyle(burgerMenu).display === 'none') {
    burgerMenu.style.display = 'block';
  } else {
    burgerMenu.style.display = 'none';
  }
}

// add event listener for clicking like icon
const likedIcon = document.getElementsByClassName('like-icon');
for(const likeicon of likedIcon) {
  likeicon.addEventListener('click', toggleLike);
}

function toggleLike() {
  if(this.classList.contains('like-active')) {
    this.classList.remove('like-active');
  } else {
    this.classList.add('like-active');
  }
}

// shows the check item
function readArticle(event) {
  let click = event.target;
  click.classList.add('done-active');
}


function articleRemove(event) {
  event.target.closest('.boxes').remove();
}