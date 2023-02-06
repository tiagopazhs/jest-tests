const md5 = require('js-md5')
const axios = require("axios");
const timestamp = new Date().getTime();
// let hash = '4e525d9da4643e3617f868814fb44890'
let PUBLIC_KEY = "339d858f7d04cf00a6adc5cf74ae3bfd"
let PRIVATE_KEY = "477e9125ebf19ce81e536d1a90a790000a9788d8"
let url = 'http://gateway.marvel.com/v1/public/comics'

const hash = md5.create(timestamp + PRIVATE_KEY + PUBLIC_KEY);
// hash.update(new Date().getTime() + PRIVATE_KEY + PUBLIC_KEY)

const options = {
  method: 'GET',
  url: url,
  headers: {
    accept: '/'
  },
  Params: {
    "apikey": PUBLIC_KEY,
    "ts": timestamp,
    "hash": hash
  }
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});