//интерфейс data job
export interface JobDataI {
  id: number;
  profession?: string;
  town: { title?: string };
  type_of_work: { title?: string };
  payment_to?: number;
  payment_from?: number;
  currency?: string;
  favorite?: boolean;
  vacancyRichText?: string;
}

//интерфейс store job
export interface JobStoreStateI {
  loading: boolean;
  error: any;
  currentPage: number;
  changeCurrentPage: (page: number) => void;
  totalCountPage: number;
  jobs: JobDataI[];
  fetchJobs: (token: string, page: number, param: ParamsQueryI) => void;
  fetchJobDetail: (token: string, id?: string) => Promise<JobDataI | undefined>;
  catalogues: IndustryI[];
  fetchCatalogues: (token: string) => void;
  keywords?: string;
  addKeywords: (value?: string) => void;
  salaryFrom: number | "";
  changeSalaryFrom: (value: number | "") => void;
  salaryTo: number | "";
  changeSalaryTo: (value: number | "") => void;
  industry: ChoosenIndustryI | null;
  addIndustry: (value?: ChoosenIndustryI) => void;
  params: ParamsQueryI;
  addParams: () => void;
  removeParams: () => void;
}

//вспомогательные интерфейсы для store job

//интерфейс отрасли хранящейся в store job
export interface ChoosenIndustryI {
  value?: string;
  label?: string;
  key?: number;
}
//интерфейс отраслей которые ожидаем с сервера
export interface IndustryI {
  key: number;
  title: string;
  title_rus: string;
  title_trimmed: string;
  url_rus: string;
}

//интерфейс параметров запроса для поиска/фильтрации
export interface ParamsQueryI {
  keywords?: string;
  payment_from: number | "";
  payment_to: number | "";
  industry?: number | null;
}

//интерфейс favorite store job
export interface FavoriteJobStoreStateI {
  loading: boolean;
  error: any;
  currentPage: number;
  changeCurrentPage: (page: number) => void;
  favoriteJobs: JobDataI[];
  toggleFavoriteJobs: (jobs: JobDataI) => void;
}
