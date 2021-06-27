const app = require('./config/server');

// routes
app.use('/api/characters', require('./app/routes/characters'));
app.use('/auth/', require('./app/routes/users'));

// starting the server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});
