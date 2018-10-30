const path = require('path')
const express = require('express')
const twig = require('twig')
const gpio = require('./gpio')
const app = express()
const port = 3000

app.engine('html', twig.__express)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'himl')
twig.cache(false)

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.render('index.html', { msg: 'hi' })
})
//button router
app.get('/button/on', (req, res) => {
    gpio.button('on')
    res.send('On all buttons')
})
app.get('/button/off', (req, res) => {
    gpio.button('off')
    res.send('Off all buttons')
})
app.get('/button/:id/on', (req, res) => {
    let id = req.params.id
    console.log(id)
    gpio.button(id, 'on')
    res.send(`button ${id} now on`)
})
app.get('/button/:id/off', (req, res) => {
    let id = req.params.id
    console.log(id)
    gpio.button(id, 'off')
    res.send(`button ${id} now off`)
})

//led router
app.get('/led/on', (req, res) => {
    gpio.led('on')
    res.send('On all leds')
})
app.get('/led/off', (req, res) => {
    gpio.led('off')
    res.send('Off all leds')
})
app.get('/led/:id/on', (req, res) => {
    let id = req.params.id
    console.log(id)
    gpio.led(id, 'on')
    res.send(`led ${id} now on`)
})
app.get('/led/:id/off', (req, res) => {
    let id = req.params.id
    console.log(id)
    gpio.led(id, 'off')
    res.send(`led ${id} now off`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})
