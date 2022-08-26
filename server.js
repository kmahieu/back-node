import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import  userRoutes  from './routes/usersRoute.js';
import session from 'express-session';
import Keycloak from 'keycloak-connect';

const app = express();


app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', userRoutes);

const memoryStore = new session.MemoryStore();
app.use(
  session({
    secret: 'secretKey',
    resave: false,
    saveUninitialized: true,
    store: memoryStore
  })
);
// 3
const keycloak = new Keycloak({
  store: memoryStore
});
app.use(
  keycloak.middleware({
    logout: '/logout',
    admin: '/'
  })
);

app.get('/api/unsecured', function(req, res) {
    res.json({ message: 'This is an unsecured endpoint payload' });
  });
  // 4
  app.get('/api/user', keycloak.protect('realm:user'), function(req, res) {
    res.json({ message: 'This is an USER endpoint payload' });
  });
  app.get('/api/admin', keycloak.protect('realm:admin'), function(req, res) {
    res.json({ message: 'This is an ADMIN endpoint payload' });
  });

const CONNECTION_URL = 'mongodb+srv://admin:admin@cluster0.yf65c.mongodb.net/jenkinsUser?retryWrites=true&w=majority';
const PORT = 4040;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`)))
        .catch((error) => console.log(error.message));

export default app;