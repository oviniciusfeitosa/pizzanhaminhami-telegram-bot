import * as functions from 'firebase-functions'
import * as express from 'express'
import * as cors from 'cors'

const app = express()

app.use(cors({ origin: true }))

app.post('/', async (request, response) => {
  /*
    You can put the logic you want here
    the message receive will be in this
    https://core.telegram.org/bots/api#update
  */
  const isTelegramMessage = request.body
                          && request.body.message
                          && request.body.message.chat
                          && request.body.message.chat.id
                          && request.body.message.from
                          && request.body.message.from.first_name

  if (isTelegramMessage) {
    const chat_id = request.body.message.chat.id
    const { first_name } = request.body.message.from

    return response.status(200).send({
      method: 'sendMessage',
      chat_id,
      text: `Hello ${first_name}`
    })
  }

  return response.status(200).send({ status: 'not a telegram message' })
})

export const router = functions.https.onRequest(app)
