const socket = io();
const viewersEl = document.getElementById('viewers');

socket.on('viewerCount', (count) => {
  viewersEl.innerText = count;

  //Show number of viewers
  viewersEl.classList.add('updated');
  setTimeout(() => {
    viewersEl.classList.remove('updated');
  }, 200);
});
