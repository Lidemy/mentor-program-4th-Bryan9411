/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
const request = require('request');

const ClientID = '7i8imjlwj0oqyiu3rutgfayf17op3w';
const baseUrl = 'https://api.twitch.tv/kraken';
const option = {
  url: `${baseUrl}/games/top`,
  headers: {
    'Client-ID': ClientID,
    Accept: 'application/vnd.twitchtv.v5+json',
  },
};

callback = (err, res, body) => {
  if (err) {
    console.log(err);
    return;
  }
  const data = JSON.parse(body);
  const topGame = data.top;
  for (let i = 0; i < topGame.length; i++) {
    console.log('=============');
    console.log(`${topGame[i].viewers} ${topGame[i].game.name}`);
  }
};

request(option, callback);
