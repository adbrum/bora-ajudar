const functions = require('firebase-functions');

const express = require('express')
const bodyParser = require('body-parser')
const app = express()

//cofig para poder receber os formulários
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.send('BoraAjudar Server')
})
app.post('/donate', (req, res) => {
  res.send(req.body)
})

exports.api = functions.https.onRequest(app)


/*Exemplo NÂO FUNCIONAL*/

/*
const request = require('request-promise')
const parse = require('xml2js').parseString

const email = 'seuemail@email.com'
const token = 'C6876096096F987097097VFG970979'
const checkoutUrl = 'https://ws.pagseguro.uol.com.br/v2/checkout/payment.html?code='


//cofig para poder receber os formulários
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.send('BoraAjudar Server')
})
app.post('/donate', (req, res) => {
    // res.send(req.body)
    request({
        uri: 'https://ws.pagseguro.uol.com.br/v2/checkout',
        method: 'POST',
        form: {
            token: token,
            email: email,
            currency: 'BRL',
            itemId1: 'idCampanha',
            itemDescription: 'Donate',
            itemQuantity1: '1',
            itemAmount1: '2.00'
        },
        headers: {
            'Content-Type': 'application/x-www-urlencoded; charcet=UTG-8'
        }
    })
        .then(data => {
            parse(data, (err, json) => {
                // console.log(json.checkout.code[0])
                res.send({
                    url: checkoutUrl + json.checkout.code[0]
                })
            })
        })
})

exports.api = functions.https.onRequest(app)*/
