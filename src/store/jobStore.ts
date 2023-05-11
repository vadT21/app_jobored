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
  fetchJobs: (token: string, page: number) => void;

  job: T | null;
  fetchJob: (token: string, id: string | undefined) => void;
  catalogues: Cat[];
  fetchCatalogues: (token: string) => void;
  keywords: string | null;
  addKeywords: (value: string | null) => void;
  salaryFrom: number | "";
  addSalaryFrom: (value: number) => void;
  salaryTo: number | "";
  addSalaryTo: (value: number) => void;
  catalogue: number | null;
  addCatalogue: (value: string) => void;
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
}

interface Cat {
  key: number;
  title: string;
  title_rus: string;
  title_trimmed: string;
  url_rus: string;
}
export const useJobStore = create<JobState>()((set, get) => ({
  currentPage: 1,
  changeCurrentPage: (page) => set({ currentPage: page }),
  totalCountPage: 125, // нужно поменять потом логика для фильтров + поиска
  loading: false,
  error: null,
  jobs: [],
  fetchJobs: async (token, page) => {
    set({ loading: true });
    try {
      const res = await JobRequestResponse(token, page);
      console.log(res);
      if (!res) throw new Error("Failed to fetch! Try again.");
      set({ jobs: res.objects, error: null });
    } catch (error: any) {
      set({ error: error.message });
    } finally {
      console.log(get().catalogues);
      set({ loading: false });
    }
  },
  job: null,
  fetchJob: async (token, id) => {
    set({ loading: true });
    try {
      const res = await DetailJobRequestResponse(token, id);
      console.log(res);
      if (!res) throw new Error("Failed to fetch! Try again.");
      set({ job: res, error: null });
    } catch (error: any) {
      set({ error: error.message });
    } finally {
      console.log(get().catalogues);
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

  keywords: null,
  addKeywords: (value) => set({ keywords: value }),

  salaryFrom: "",
  addSalaryFrom: (value) => set({ salaryFrom: value }),

  salaryTo: "",
  addSalaryTo: (value) => set({ salaryTo: value }),

  catalogue: null,
  addCatalogue: (value) => set((state) => ({ catalogue: 1 })),
}));
