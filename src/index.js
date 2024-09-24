const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());

// Set a cookcookieie
app.get('/setcookie', (req, res) => {
  res.cookie('user', 'Arvind', { maxAge: 900000, httpOnly: true });
  res.send('Cookie set');
});

// Read a cookie
app.get('/getcookie', (req, res) => {
  const user = req.cookies.user;
  res.send(`User: ${user}`);
});

// Clear a cookie
app.get('/clearcookie', (req, res) => {
  res.clearCookie('user');
  res.send('Cookie cleared');
});

app.listen(3002, () => console.log('Server running on port 3002'));

