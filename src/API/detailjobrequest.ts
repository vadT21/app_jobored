import axios from "axios";
import { API_DATA } from "../constants/apiData";
import { JobDataI } from "../models";

const DetailJobRequestResponse = async (
  token: string,
  id: string | undefined,
): Promise<JobDataI> => {
  const headers = {
    ...API_DATA.headers,
    "x-api-app-id": `${API_DATA.client_secret}`,
  };
  const url = `${API_DATA.base_url}/vacancies/${id}`;

  try {
    const response = await axios.get<JobDataI>(url, {
      headers: {
        ...headers,
        Authorization: `Bearer ${token}`,
      },
    });
    const objects = response.data;
    console.log("wrok api");
    return objects;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export default DetailJobRequestResponse;
