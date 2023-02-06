const axios = require('axios');
const MD5 = require("crypto-js/md5");

const getCharacters = async () => {
    const ts = 1
    const privateKey = "477e9125ebf19ce81e536d1a90a790000a9788d8"
    const publicKey = "339d858f7d04cf00a6adc5cf74ae3bfd"
    const hash = MD5(ts + privateKey + publicKey).toString()
    const { data } = await axios.get(`http://gateway.marvel.com/v1/public/comics?apikey=${publicKey}&hash=${hash}&ts=${ts}`);
    return data;
}

(async () => {
   const data = await getCharacters()
   console.log(data.data);
})();

exports.getCharacters = getCharacters
