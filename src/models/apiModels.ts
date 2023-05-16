import { JobDataI } from ".";

// интерфейс job API запроса
export interface JobRequestI {
  total: number;
  objects: JobDataI[];
}
