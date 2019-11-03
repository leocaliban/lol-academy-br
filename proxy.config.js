const proxy = [
  {
    context: '/api',
    target: 'https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/',
    pathRewrite: {'^/api' : ''},
    changeOrigin: true,
  },
  {
    context: '/league',
    target: 'https://br1.api.riotgames.com/lol/league/v4/entries/by-summoner/',
    pathRewrite: {'^/league' : ''},
    changeOrigin: true,
  }
];
module.exports = proxy;
