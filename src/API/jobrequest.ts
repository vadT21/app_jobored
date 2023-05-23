import axios from "axios";
import { API_DATA } from "../constants/apiData";
import { ParamsQueryI, JobDataI } from "../models";

interface JobRequestI {
  total: number;
  objects: JobDataI[];
}

export const JobRequest = async (
  token: string,
  page: number,
  params: ParamsQueryI | number[],
): Promise<JobRequestI> => {
  const headers = {
    ...API_DATA.headers,
  };
  const url = `${API_DATA.base_url}/vacancies/`;

  const queryParams: any = {
    published: 1,
  };

  if (!Array.isArray(params)) {
    queryParams.count = 4;
    queryParams.page = page - 1;
    //цикл для добавления не пустых "ключей:значений" к запросу
    for (const key in params) {
      if ((params as any)[key]) {
        queryParams[key] = (params as any)[key];
      }
    }
    // проверка на оклад «по договоренности», т.е. если зарпалата не указана,
    //то добавлять доп. параметр no_agreement , по моей логике если зарплата
    // идет "от" больше чем 0, то такие зарплаты мы не отображаем
    if (params.payment_from) {
      queryParams["no_agreement"] = 1;
    }
  } else {
    queryParams["ids[]"] = params;
  }

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
