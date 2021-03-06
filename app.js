require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
const hbs          = require('hbs');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');
const cors         = require('cors')

const session       = require('express-session');
const passport      = require('passport');

const emailController = require('./email/email.controller');


require('./configs/passport')

mongoose
  .connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();


// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// session
app.use(session({
  secret: 'i use to be a DJ',
  resave: true,
  saveUninitialized: true,
  cookie:{
    secure: process.env.NODE_ENV === "production", 
    sameSite: process.env.NODE_ENV === "production" ? 'none' : 'lax',
    // httpOnly: false,
    maxAge: 60000000
  },
  ttl: 60 * 60 * 24
}))

app.set('trust proxy', 1)

app.use(passport.initialize());
app.use(passport.session())


// Express View engine setup

app.use(require('node-sass-middleware')({
  src:  path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  sourceMap: true
}));
      

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));



// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';

// Cors
app.use(
  cors({
    credentials: true,
    origin: [process.env.CORS_ALLOWED]
  })
);

// Passport 
app.use(passport.initialize());
app.use(passport.session());

// Email confirmation
// app.use(express.json())

// app.get('/wake-up', (req, res) => res.json('👌'))

// app.post('/email', emailController.collectEmail)

// app.get('/email/confirm/:id', emailController.confirmEmail)

// app.use('*', (req, res) => {
//   res.status(404).json({ msg: 'Not Found' })
// })





const index = require('./routes/index');
app.use('/', index);

const eventRoutes = require('./routes/events-routes')
app.use('/api', eventRoutes)

const guestRoutes = require('./routes/guestlist-routes')
app.use('/api', guestRoutes)

const authRoutes = require('./routes/auth-routes');
app.use('/api', authRoutes);

const uploadRoutes = require('./routes/file-upload')
app.use('/api', uploadRoutes);

const profileRoutes = require('./routes/profile-routes')
app.use('/api', profileRoutes);

const patchRoutes= require('./routes/patch.route')
app.use('/api', patchRoutes);

const emailRoutes= require('./routes/email-routes')
app.use('/api', emailRoutes);



module.exports = app;
