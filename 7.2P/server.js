const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

let viewers = Math.floor(Math.random() * 5000) + 1000;

io.on('connection', (socket) => {
  console.log('A viewer connected');

  const interval = setInterval(() => {
    const change = Math.floor(Math.random() * 100) - 50;
    viewers = Math.max(0, viewers + change);

    socket.emit('viewerCount', viewers);
  }, 1000);

  socket.on('disconnect', () => {
    console.log('A viewer disconnected');
    clearInterval(interval);
  });
});

// Start server
http.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
