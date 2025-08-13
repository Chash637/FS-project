const express = require('express');
const session = require('express-session');
const app = express();

app.use(express.json());

app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }
}));

app.post('/login', (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).send('Please provide your name');

  req.session.student = { name };
  res.send(`Logged in as ${name}`);
});

app.get('/results', (req, res) => {
  if (req.session.student && req.session.student.name) {
    res.send(`Hi ${req.session.student.name}, your results are available!`);
  } else {
    res.status(401).send('Access denied: Please login to view results');
  }
});

app.get('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      return res.status(500).send('Error logging out');
    }
    res.clearCookie('connect.sid');
    res.send('Logged out successfully');
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
