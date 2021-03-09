require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
const emailController = require('../email/email.controller')
// const { PORT, CLIENT_ORIGIN, DB_URL } = require('./config')


// Allow the app to accept JSON on req.body

app.use(express.json())

app.get('/wake-up', (req, res) => res.json('👌'))

app.post('/email', emailController.collectEmail)

app.get('/email/confirm/:id', emailController.confirmEmail)

app.use('*', (req, res) => {
  res.status(404).json({ msg: 'Not Found' })
})


module.exports = app;
