# CryptPriceBot
This is a telegram bot that check the price of cryptocurrency from CoinMarketCap API into your preferred currency. In addition to that, you can compare prices of cryptocurrency in ratio.

## Add this bot to your Telegram
I hosted this bot on Digital Ocean. Anyone can use this bot with the link: [CryptPriceBot](http://t.me/CryptPriceBot)

## Feature
- Check price of Cryptocurrency from CoinMarketCap.
- Check price of it at your preference currency.
- Check ratio of a Cryptocurrency to another.

## Command
- `/price steem` (Check price of steem in USD(default currency))
- `/price steem-dollars MYR` (Check price of SBD in MYR (Malaysian Ringgit))
- `/ratio steem steem-dollars` (Check ratio of steem to steem-dollars)

## Installation
- Clone this Repo
- Run `npm install` or `yarn install`
- setup `.env` file with your own telegram API key (check `.env.sample`). You can get it from Telegram Bot Father.
- For development mode, use `npm run dev` or `yarn dev`
- For production use `npm run build` or `yarn build` and a `dist/` file will be generated.
- Simply run `node dist/index.js`, or using PM2, `pm2 start dist/index.js`


## License
MIT

