import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { JobDataI } from "../models";

interface FavoriteJobStoreStateI {
  currentPage: number;
  changeCurrentPage: (page: number) => void;
  favoriteJobs: JobDataI[];
  toggleFavoriteJobs: (job: JobDataI) => void;
}

export const useFavoritesStore = create<FavoriteJobStoreStateI>()(
  devtools(
    persist(
      (set) => ({
        currentPage: 1,
        changeCurrentPage: (page) => set({ currentPage: page }),
        favoriteJobs: [],
        toggleFavoriteJobs: (job) =>
          set((state) => {
            const index = state.favoriteJobs.findIndex(
              (el) => el.id === job.id,
            );
            if (index === -1) {
              return { favoriteJobs: [...state.favoriteJobs, job] };
            } else {
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
