import { create } from "zustand";
import JobRequestResponse from "../API/jobrequest";

interface JobState {
  loading: boolean;
  error: any;
  currentPage: number;
  changeCurrentPage: (page: number) => void;
  totalCountPage: number;
  jobs: T[];
  fetchJobs: (token: string, page: number) => void;
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
export const useJobStore = create<JobState>()((set, get) => ({
  currentPage: 1,
  changeCurrentPage: (page) => set({ currentPage: page }),
  totalCountPage: 125, // нужно поменять потом логика для фильтров + поиска
  loading: false,
  error: null,
  jobs: [],
  fetchJobs: async (token, page) => {
    console.log("work add JR");
    set({ loading: true });
    try {
      const res = await JobRequestResponse(token, page);
      console.log(res);

      if (!res) throw new Error("Failed to fetch! Try again.");

      set({ jobs: res.objects, error: null });
    } catch (error: any) {
      set({ error: error.message });
    } finally {
      set({ loading: false });
      console.log("stop JR");
    }
  },
}));
