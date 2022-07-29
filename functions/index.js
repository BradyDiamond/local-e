const functions = require("firebase-functions");
const express = require("express");
const cors = require('cors');
const stripe = require("stripe")("")


const app = express();
const corsHeaders = { 
  'Access-Control-Allow-Headers' : "*",
  'Access-Control-Allow-Methods' : "post",
  'Access-Control-Allow-Origin' : "*",
}

app.use(cors({origin: true}));
app.use(express.json());

app.get('/', (request, response) => response.status(200).send("running"))

app.post('/payments/create', async (request, response) => {
  const total = request.query.total;


  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  response.status(201).send({clientSecret: paymentIntent.client_secret,})
})

exports.api = functions.https.onRequest(app)
   