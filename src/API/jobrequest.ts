import axios from "axios";
import { API_DATA } from "../constants/apiData";

interface JobRequestResponseI {
  objects: {
    id: number;
    profession: string | undefined;
    town: { title: string | undefined };
    type_of_work: { title: string | undefined };
    payment_to: number | undefined;
    payment_from: number | undefined;
    currency: string | undefined;
    favorite: boolean;
  }[];
}

const JobRequestResponse = async (
  token: string,
  page: number,
): Promise<JobRequestResponseI> => {
  const headers = {
    ...API_DATA.headers,
    "x-api-app-id": `${API_DATA.client_secret}`,
  };
  const url = `${API_DATA.base_url}/vacancies/?published=1&page=${
    page - 1
  }&count=4`;
  try {
    const response = await axios.get<JobRequestResponseI>(url, {
      headers: {
        ...headers,
        Authorization: `Bearer ${token}`,
      },
      params: {},
    });
    const objects = response.data.objects;
    console.log("wrok api");
    console.log(objects);
    return { objects };
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export default JobRequestResponse;
