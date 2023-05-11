import { create } from "zustand";
import JobRequestResponse from "../API/jobrequest";
import DetailJobRequestResponse from "../API/detailjobrequest";
import CatalogRequestResponse from "../API/catalogrequest";

interface JobState {
  loading: boolean;
  error: any;

  currentPage: number;
  changeCurrentPage: (page: number) => void;
  totalCountPage: number;

  jobs: T[];
  fetchJobs: (token: string, page: number, param: Param) => void;

  job: T | null;
  fetchJob: (token: string, id: string | undefined) => void;
  removeJob: () => void;

  catalogues: Cat[];
  fetchCatalogues: (token: string) => void;

  keywords: string | undefined;
  addKeywords: (value: string | undefined) => void;
  salaryFrom: number | "";
  changeSalaryFrom: (value: number | "") => void;
  salaryTo: number | "";
  changeSalaryTo: (value: number | "") => void;
  catalogue: CatSokr | null;
  addCatalogue: (value: CatSokr | undefined) => void;
  params: Param;
  addParams: () => void;
  removeParams: () => void;
}

interface Param {
  keywords: string | undefined;
  payment_from: number | "";
  payment_to: number | "";
  catalogue: number | null | undefined;
}
interface T {
  id: number;
  profession: string | undefined;
  town: { title: string | undefined };
  type_of_work: { title: string | undefined };
  payment_to: number | undefined;
  payment_from: number | undefined;
  currency: string | undefined;
  favorite: boolean;
  vacancyRichText: string;
}

interface Cat {
  key: number | undefined;
  title: string;
  title_rus: string;
  title_trimmed: string;
  url_rus: string;
}

interface CatSokr {
  value: string | undefined;
  label: string | undefined;
  key: number | undefined;
}
export const useJobStore = create<JobState>()((set, get) => ({
  currentPage: 1,
  changeCurrentPage: (page) => set({ currentPage: page }),
  totalCountPage: 125, // нужно поменять потом логика для фильтров + поиска
  loading: false,
  error: null,
  jobs: [],
  fetchJobs: async (token, page, params) => {
    set({ loading: true });
    try {
      const res = await JobRequestResponse(token, page, params);
      if (!res) throw new Error("Failed to fetch! Try again.");
      set({
        jobs: res.objects,
        totalCountPage: res.total / 4 > 125 ? 125 : res.total / 4,
        error: null,
      });
    } catch (error: any) {
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },
  job: null,
  fetchJob: async (token, id) => {
    set({ loading: true });
    try {
      const res = await DetailJobRequestResponse(token, id);
      if (!res) throw new Error("Failed to fetch! Try again.");
      set({ job: res, error: null });
    } catch (error: any) {
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },
  removeJob: () => set({ job: null }),
  catalogues: [],
  fetchCatalogues: async (token) => {
    set({ loading: true });
    try {
      const res = await CatalogRequestResponse(token);
      if (!res) throw new Error("Failed to fetch! Try again.");
      set({ catalogues: res, error: null });
    } catch (error: any) {
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },

  keywords: undefined,
  addKeywords: (value) => set({ keywords: value }),

  salaryFrom: "",
  changeSalaryFrom: (value) => set({ salaryFrom: value }),

  salaryTo: "",
  changeSalaryTo: (value) => set({ salaryTo: value }),

  catalogue: null,
  addCatalogue: (value) => set({ catalogue: value }),

  params: {
    keywords: "",
    payment_from: "",
    payment_to: "",
    catalogue: null,
  },
  addParams: () =>
    set({
      params: {
        keywords: get().keywords,
        payment_from: get().salaryFrom,
        payment_to: get().salaryTo,
        catalogue: get().catalogue?.key,
      },
      currentPage: 1,
    }),
  removeParams: () =>
    set({
      params: {
        keywords: "",
        payment_from: "",
        payment_to: "",
        catalogue: null,
      },
      currentPage: 1,
    }),
}));
