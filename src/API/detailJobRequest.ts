import axios from "axios";
import { API_DATA } from "../constants/apiData";
import { JobDataI } from "../models";

export const DetailJobRequest = async (
  token: string,
  id: string,
): Promise<JobDataI[]> => {
  const headers = {
    ...API_DATA.headers,
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
    return [objects];
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
