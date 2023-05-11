import axios from "axios";
import { API_DATA } from "../constants/apiData";

interface JobRequestResponseI {
  objects: Cat[];
}

interface Cat {
  key: number;
  title: string;
  title_rus: string;
  title_trimmed: string;
  url_rus: string;
}

const CatalogRequestResponse = async (token: string): Promise<Cat[]> => {
  const headers = {
    ...API_DATA.headers,
    "x-api-app-id": `${API_DATA.client_secret}`,
  };
  const url = `${API_DATA.base_url}/catalogues`;
  try {
    const response = await axios.get<Cat[]>(url, {
      headers: {
        ...headers,
        Authorization: `Bearer ${token}`,
      },
      params: {},
    });
    const objects = response.data;
    return objects;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export default CatalogRequestResponse;
