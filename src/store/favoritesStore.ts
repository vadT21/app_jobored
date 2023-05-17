import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { JobDataI } from "../models";

interface FavoriteJobStoreStateI {
  loading: boolean;
  error: any;
  currentPage: number;
  changeCurrentPage: (page: number) => void;
  favoriteJobs: JobDataI[];
  toggleFavoriteJobs: (jobs: JobDataI) => void;
}

export const useFavoritesStore = create<FavoriteJobStoreStateI>()(
  devtools(
    persist(
      (set) => ({
        currentPage: 0,
        changeCurrentPage: (page) => set({ currentPage: page }),
        loading: false,
        error: null,
        favoriteJobs: [],
        toggleFavoriteJobs: (jobs) =>
          set((state) => {
            const index = state.favoriteJobs.findIndex(
              (el) => el.id === jobs.id,
            );
            if (index === -1) {
              jobs.favorite = true;
              return { favoriteJobs: [...state.favoriteJobs, jobs] };
            } else {
              jobs.favorite = false;
              state.favoriteJobs.splice(index, 1);
              return { favoriteJobs: [...state.favoriteJobs] };
            }
          }),
      }),
      {
        name: "favorites-storage",
      },
    ),
  ),
);
