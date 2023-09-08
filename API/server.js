const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors')
const User = require('./models/User');
const Stats = require('./models/postStat');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');


const app = express();
const salt = bcrypt.genSaltSync(10);
const secret = 'secret'

app.use(cookieParser());
app.use(express.json());
mongoose.connect('mongodb+srv://wikipedijus:password@poker.mb6ndcw.mongodb.net/?retryWrites=true&w=majority');


const authenticate = async (req, res, next) => {
  const { token } = req.cookies;
  try {
    const info = jwt.verify(token, secret);
    req.userInfo = info;
    next(); 
  } catch (err) {
    res.status(401).json({ message: 'Unauthorized' });
  }
};

app.post('/register', async (req,res) => {
  const {username,password,email,postcode} = req.body;
  try{
    const userDoc = await User.create({
      username,
      password:bcrypt.hashSync(password,salt),
      email,
      postcode
    });
    res.json(userDoc);
  } catch(e) {
    console.log(e);
    res.status(400).json(e);
  }
});

app.post('/stats',authenticate, async (req, res) => {
  const {token} = req.cookies;
  jwt.verify(token, secret, {}, async (err,info) => {
    if (err) throw err;
    const {gameDate, place, amountWon, buyin, rebuy, rebuyAmount} = req.body;
    const postStats = await Stats.create({
      gameDate, place, amountWon, buyin, rebuy, rebuyAmount,
      playerId:info.id, playerName:info.username
    });
    res.json(postStats);
  });

});
app.post('/login', async (req,res) => {
  const {username,password} = req.body;
  const userDoc = await User.findOne({username});
  const passOk = bcrypt.compareSync(password, userDoc.password);
  if (passOk) {
    // logged in
    jwt.sign({username,id:userDoc._id}, secret, {expiresIn: '1h'}, (err,token) => {
      if (err) throw err;
      res.cookie('token', token).json({
        id:userDoc._id,
        username,
      });
    });
  } else {
    res.status(400).json('wrong credentials');
  }
});
app.post('/logout', async (req,res) => {
  res.cookie('token', '').json('ok');
});
app.get('/post',authenticate, async (req,res) => {
  res.json(
    await Stats.find()
      .populate('playerName', ['username'])
      .limit(20)
  );
});


app.listen(3000);