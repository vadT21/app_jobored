import axios from "axios";

interface PasswordAuthResponse {
  access_token: string;
}

export async function authUser(): Promise<string> {
  const login = "sergei.stralenia@gmail.com";
  const password = "paralect123";
  const client_id = "2356";
  const client_secret =
    "v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948";
  const hr = 0;

  const headers = {
    "x-secret-key": "GEU4nvd3rej*jeh.eqp",
  };

  try {
    const response = await axios.get<PasswordAuthResponse>(
      "https://startup-summer-2023-proxy.onrender.com/2.0/oauth2/password",
      {
        headers,
        params: {
          login,
          password,
          client_id,
          client_secret,
          hr,
        },
      },
    );
    const access_token = response.data.access_token;
    return access_token;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}
