import axios from "axios";
import { API_DATA } from "../constants/apiData";
import { IndustryI } from "../models";

export const CatalogRequest = async (token: string): Promise<IndustryI[]> => {
  const headers = {
    ...API_DATA.headers,
  };
  const url = `${API_DATA.base_url}/catalogues`;
  try {
    const response = await axios.get<IndustryI[]>(url, {
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
