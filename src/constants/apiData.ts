export const API_DATA = {
  login: "sergei.stralenia@gmail.com",
  password: "paralect123",
  client_id: "2356",
  client_secret:
    "v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948",
  hr: 0,
  headers: {
    "x-secret-key": "GEU4nvd3rej*jeh.eqp",
    "X-Api-App-Id":
      "v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948",
  },
  base_url: "https://startup-summer-2023-proxy.onrender.com/2.0",
  alt_url: "https://startup-summer-proxy-production.up.railway.app/2.0",
};

// для обновления токена
const TOKEN_DAY_LIVE_TIME = 5; // кол-во дней
export const TOKEN_LIVE_TIME = TOKEN_DAY_LIVE_TIME * 24 * 60 * 60 * 1000;
