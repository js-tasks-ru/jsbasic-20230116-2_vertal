function toggleText() {
  let button = document.querySelector('.toggle-text-button');
  let div = document.getElementById('text');
  button.onclick = function() {
    div.hidden = !div.hidden;
  }
}
