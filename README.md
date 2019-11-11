# pizzanhaminhami-telegram-bot

Telegram bot that handles how many pizzas each member needs to pay by **PizzaPoints** in month.

Each PizzaPoint means: 
- **1Ppt == Half pizza**
- **2Ppt == Whole pizza** 

## Technologies
- Firebase
- Javascript

## Install

### Configs
```command
$ npm install -g firebase-tools
$ firebase login
$ cd functions
$ npm install
```

### Functions
- [router](https://us-central1-pizzacounterbot.cloudfunctions.net/router)

### Deploy
```command
$ firebase deploy --only functions
```

### @TODO
- [ ] Add route `/help` to show how this bot works
- [ ] Get n show telegram chat id, title and type
- [ ] Create telegram row in database for each telegram group when added with pattern `\{group_id}\{year}\{month}`
- [ ] Create actions to show everything about Pizza Points of the group
    - [ ] List - Shows the name of who needs to pay a pizza, pizza points(1/2 by each point) and the reasons why the user needs to pay
    - [ ] Create - Must create a subgroup according to current year and month

#### References
- [Reference 1](https://medium.com/@pikilon/serverless-telegram-bot-with-firebase-d11d07579d8a)
- [Reference 2](https://core.telegram.org/bots/api#update)
