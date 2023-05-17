import { create } from "zustand";
import JobRequestResponse from "../API/jobrequest";
import DetailJobRequestResponse from "../API/detailjobrequest";
import CatalogRequestResponse from "../API/catalogrequest";
import { JobDataI, ParamsQueryI, IndustryI } from "../models";

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
//интерфейс отрасли хранящейся в store
interface ChoosenIndustryI {
  value?: string;
  label?: string;
  key?: number;
}

export const useJobStore = create<JobStoreStateI>()((set, get) => ({
  currentPage: 1,
  changeCurrentPage: (page) => set({ currentPage: page }),
  totalCountPage: 125,
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
  fetchJobDetail: async (token, id) => {
    set({ loading: true });
    try {
      const res = await DetailJobRequestResponse(token, id);
      if (!res) throw new Error("Failed to fetch! Try again.");
      return res;
    } catch (error: any) {
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },
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

  industry: null,
  addIndustry: (value) => set({ industry: value }),

  params: {
    keywords: "",
    payment_from: "",
    payment_to: "",
    industry: null,
  },
  addParams: () =>
    set({
      params: {
        keywords: get().keywords,
        payment_from: get().salaryFrom,
        payment_to: get().salaryTo,
        industry: get().industry?.key,
      },
      currentPage: 1,
    }),
  removeParams: () =>
    set({
      params: {
        keywords: "",
        payment_from: "",
        payment_to: "",
        industry: null,
      },
      currentPage: 1,
      keywords: "",
      salaryFrom: "",
      salaryTo: "",
      industry: null,
    }),
}));
