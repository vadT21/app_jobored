import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface FavoriteJobState {
  loading: boolean;
  error: unknown;
  currentPage: number;
  changeCurrentPage: (page: number) => void;
  favoriteJobs: T[];
  toggleFavoriteJobs: (jobs: T) => void;
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
export const useFavoritesStore = create<FavoriteJobState>()(
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
