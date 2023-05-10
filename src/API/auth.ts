import axios from "axios";
import { API_DATA } from "../constants/apiData";

interface PasswordAuthResponseI {
  access_token: string;
}

const PasswordAuthResponse = async (): Promise<string> => {
  const headers = API_DATA.headers;
  const login = API_DATA.login;
  const password = API_DATA.password;
  const client_id = API_DATA.client_id;
  const client_secret = API_DATA.client_secret;
  const hr = API_DATA.hr;

  try {
    const response = await axios.get<PasswordAuthResponseI>(
      `${API_DATA.base_url}/oauth2/password`,
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
};

export default PasswordAuthResponse;
