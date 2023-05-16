import axios from "axios";
import { API_DATA } from "../constants/apiData";
import { ParamsQueryI, JobRequestI } from "../models";

const JobRequestResponse = async (
  token: string,
  page: number,
  params: ParamsQueryI,
): Promise<JobRequestI> => {
  const headers = {
    ...API_DATA.headers,
    "x-api-app-id": `${API_DATA.client_secret}`,
  };
  const url = `${API_DATA.base_url}/vacancies/?published=1&page=${
    page - 1
  }&count=4`;

  const queryParams = {
    keywords: params.keywords,
    payment_from: params.payment_from,
    payment_to: params.payment_to,
    catalogues: params.industry,
  };

  try {
    const response = await axios.get<JobRequestI>(url, {
      headers: {
        ...headers,
        Authorization: `Bearer ${token}`,
      },
      params: queryParams,
    });
    const objects = response.data;
    return objects;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export default JobRequestResponse;
