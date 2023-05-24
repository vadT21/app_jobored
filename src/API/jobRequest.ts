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
  params: ParamsQueryI,
): Promise<JobRequestI> => {
  const headers = {
    ...API_DATA.headers,
  };
  const url = `${API_DATA.base_url}/vacancies/`;

  const queryParams: any = {
    published: 1,
    count: 4,
    page: page - 1,
  };

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

  
  const response = await axios.get<JobRequestI>(url, {
    headers: {
      ...headers,
      Authorization: `Bearer ${token}`,
    },
    params: queryParams,
  });
  const objects = response.data;
  return objects;

};
