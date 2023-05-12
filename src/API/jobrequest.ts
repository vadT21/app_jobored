import axios from "axios";
import { API_DATA } from "../constants/apiData";

interface JobRequestResponseI {
  total: number;
  objects: {
    id: number;
    profession: string | undefined;
    town: { title: string | undefined };
    type_of_work: { title: string | undefined };
    payment_to: number | undefined;
    payment_from: number | undefined;
    currency: string | undefined;
    favorite: boolean;
    vacancyRichText: string;
  }[];
}
interface Param {
  keywords: string | undefined;
  payment_from: number | "";
  payment_to: number | "";
  catalogue: number | null | undefined;
}

const JobRequestResponse = async (
  token: string,
  page: number,
  params: Param,
): Promise<JobRequestResponseI> => {
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
    catalogues: params.catalogue,
  };

  try {
    const response = await axios.get<JobRequestResponseI>(url, {
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
