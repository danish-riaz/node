exports.getLogin = (req, res, next) => {
  let isLoggedIn = req.get('Cookie');
  if (isLoggedIn) {
    isLoggedIn = req.get('Cookie').split('=')[1];
    console.log(isLoggedIn);
  }
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    isLoggedIn: isLoggedIn
  });
};


exports.postLogin = (req, res, next) => {
  res.setHeader('Set-Cookie', 'loggedIn=true');
  res.redirect('/');
};