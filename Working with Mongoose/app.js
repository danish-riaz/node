const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const errorController = require('./controllers/error');
const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  User.findById('5ed9e5b1b414604bbd08843b')
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoose
  .connect(
    'mongodb+srv://nodeapp:gPeGpg9oiyejoPHA@nodecompleteguide-rozde.mongodb.net/shop?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
  .then(result => {
    User.findOne().then((user) => {
      if (!user) {
        const user = new User({
          name: 'Danish',
          email: 'test@test.com',
          cart: [],
        });
        user.save();
      }
      console.log('Server started at port 3000');
      app.listen(3000);
    });
  })
  .catch(err => {
    console.log(err);
  });
