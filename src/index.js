import TelegramBot from 'node-telegram-bot-api';
import * as dotenv from 'dotenv';

import 'babel-polyfill';

dotenv.config();

// from file
import { getPrice, countRatio } from './price';

const bot = new TelegramBot(process.env.TELEGRAM_SECRET, { polling: true });

bot.onText(/\/price (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const newMatch = match[1].split(' ');

  if (newMatch.length > 0 && newMatch.length < 3) {
    const coin = newMatch[0];
    const currency = newMatch[1] || 'USD';
    console.log(currency, coin);
    getPrice(coin, currency)
      .then(data => {
        bot.sendMessage(chatId, data);
      })
      .catch(err => bot.sendMessage(chatId, 'Wrong Coin'));
  } else {
    bot.sendMessage(
      chatId,
      'Please follow the format: "/price <CryptoCurrencyName> <CurrencyName>" (e.g. /price steem MYR)'
    );
  }
});

bot.onText(/\/ratio (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const newMatch = match[1].split(' ');

  if (newMatch.length == 2) {
    const coin1 = newMatch[0];
    const coin2 = newMatch[1];
    countRatio(coin1, coin2)
      .then(data => {
        bot.sendMessage(chatId, data);
      })
      .catch(err => bot.sendMessage(chatId, 'Invalid Coin'));
  } else {
    bot.sendMessage(
      chatId,
      'Please follow the format: "/ratio <Crypto1> <Crypto2>" (e.g. /ratio steem steem-dollars)'
    );
  }
});
