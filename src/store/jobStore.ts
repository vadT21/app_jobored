import { create } from "zustand";
import { JobRequest, DetailJobRequest, CatalogRequest } from "../api";
import { JobDataI, ParamsQueryI, IndustryI } from "../models";
import { useTokenStore } from ".";

export interface JobStoreStateI {
  loading: boolean;
  error: any;
  errorDetail: any;
  currentPage: number;
  changeCurrentPage: (page: number) => void;
  totalCountPage: number;
  jobs: JobDataI[];
  fetchJobs: (page: number, param: ParamsQueryI) => void;
  fetchJobDetail: (id: string) => void;
  catalogues: IndustryI[];
  fetchCatalogues: () => void;
  keyword: string;
  addKeyword: (value?: string) => void;
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

const secretToken = useTokenStore.getState().secretToken;

export const useJobStore = create<JobStoreStateI>()((set, get) => ({
  currentPage: 1,
  changeCurrentPage: (page) => set({ currentPage: page }),
  totalCountPage: 125,
  loading: false,
  error: null,
  errorDetail: null,
  jobs: [],
  fetchJobs: async (page, params) => {
    set({ loading: true });
    try {
      const res = await JobRequest(secretToken, page, params);
      set({
        jobs: res.objects,
        totalCountPage: res.total / 4 > 125 ? 125 : Math.ceil(res.total / 4),
        error: null,
      });
    } catch (error: any) {
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },
  fetchJobDetail: async (id) => {
    set({ loading: true });
    try {
      const res = await DetailJobRequest(secretToken, id);
      set({
        jobs: res,
      });
    } catch (error: any) {
      set({ errorDetail: error.message });
    } finally {
      set({ loading: false });
    }
  },
  catalogues: [],
  fetchCatalogues: async () => {
    try {
      const res = await CatalogRequest(secretToken);
      set({ catalogues: res, error: null });
    } catch (error: any) {
      set({ error: error.message });
    }
  },

  keyword: "",
  addKeyword: (value) => set({ keyword: value }),

  salaryFrom: "",
  changeSalaryFrom: (value) => set({ salaryFrom: value }),

  salaryTo: "",
  changeSalaryTo: (value) => set({ salaryTo: value }),

  industry: null,
  addIndustry: (value) => set({ industry: value }),

  params: {
    keyword: "",
    payment_from: "",
    payment_to: "",
    catalogues: null,
  },
  addParams: () => {
    const isValuesEqual =
      get().params.keyword === get().keyword &&
      get().params.payment_from === get().salaryFrom &&
      get().params.payment_to === get().salaryTo &&
      get().params.catalogues == get().industry?.key;

    if (!isValuesEqual) {
      set({
        params: {
          keyword: get().keyword,
          payment_from: get().salaryFrom,
          payment_to: get().salaryTo,
          catalogues: get().industry?.key,
        },
        currentPage: 1,
      });
    }
  },
  removeParams: () => {
    const isValuesEmpty =
      get().params.keyword === "" &&
      get().params.payment_from === "" &&
      get().params.payment_to === "" &&
      get().params.catalogues === null;

    if (isValuesEmpty) {
      set({
        keyword: "",
        salaryFrom: "",
        salaryTo: "",
        industry: null,
      });
    } else {
      set({
        params: {
          keyword: "",
          payment_from: "",
          payment_to: "",
          catalogues: null,
        },
        currentPage: 1,
        keyword: "",
        salaryFrom: "",
        salaryTo: "",
        industry: null,
      });
    }
  },
}));
