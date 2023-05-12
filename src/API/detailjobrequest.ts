import axios from "axios";
import { API_DATA } from "../constants/apiData";

interface JobRequestResponseI {
  id: number;
  profession: string | undefined;
  town: { title: string | undefined };
  type_of_work: { title: string | undefined };
  payment_to: number | undefined;
  payment_from: number | undefined;
  currency: string | undefined;
  favorite: boolean;
  vacancyRichText: string;
}

const DetailJobRequestResponse = async (
  token: string,
  id: string | undefined,
): Promise<JobRequestResponseI> => {
  const headers = {
    ...API_DATA.headers,
    "x-api-app-id": `${API_DATA.client_secret}`,
  };
  const url = `${API_DATA.base_url}/vacancies/${id}`;

  try {
    const response = await axios.get<JobRequestResponseI>(url, {
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
