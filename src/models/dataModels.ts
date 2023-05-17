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

//интерфейс категории отраслей
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
