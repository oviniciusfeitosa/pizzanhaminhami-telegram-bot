const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({origin: true}));

app.post('/', async (request, response) => {

    const isTelegramMessage = request.body
        && request.body.message.chat
        && request.body.message.chat.id
        && request.body.message.from
        && request.body.message.from.first_name
    
    if (isTelegramMessage) {
        const {title, type, id} = request.body.message.chat;
        
        const {first_name, username} = request.body.message.from;
        
        return response.status(200).send({
            method: 'sendMessage',
            id,
            text: `[${title}-${type}] Olá! ${first_name}(${username})!`
        })
    }
    
    return response.status(200).send({status: 'not a telegram message'})
});

exports.router = functions.https.onRequest(app);
