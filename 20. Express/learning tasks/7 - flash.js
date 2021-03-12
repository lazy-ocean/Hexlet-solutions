/* flash.js
Write a flash middleware that would be executed like this:

// implementation
app.use(flash());
 
// use
res.flash('info', `Welcome, ${user.nickname}!`);

// use in html/pug
for message in flash
  .alert(class=`alert-${message.type}`)
    = message.message
*/
export default () => (req, res, next) => {
  res.locals.flash = req.session.flash || [];
  req.session.flash = [];
  res.flash = (type, message) => {
    if (!req.session.flash) {
      req.session.flash = [];
    }
    req.session.flash.push({ type, message });
  };
  next();
};
