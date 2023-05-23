import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface FavoriteJobStoreStateI {
  currentPage: number;
  changeCurrentPage: (page: number) => void;
  favoriteJobsID: number[];
  toggleFavoriteJobs: (jobID: number) => void;
}

export const useFavoritesStore = create<FavoriteJobStoreStateI>()(
  devtools(
    persist(
      (set) => ({
        currentPage: 1,
        changeCurrentPage: (page) => set({ currentPage: page }),
        favoriteJobsID: [],
        toggleFavoriteJobs: (jobID) =>
          set((state) => {
            const index = state.favoriteJobsID.findIndex((el) => el === jobID);
            if (index === -1) {
              return {
                favoriteJobsID: [...state.favoriteJobsID, jobID],
              };
            } else {
              state.favoriteJobsID.splice(index, 1);
              return {
                favoriteJobsID: [...state.favoriteJobsID],
              };
            }
          }),
      }),
      {
        name: "favorites-storage",
      },
    ),
  ),
);
