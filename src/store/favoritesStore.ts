import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import JobRequestResponse from "../API/jobrequest";

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
            console.log("work state");
            const array = state.favoriteJobs;

            const index = array.findIndex((i) => i.id === jobs.id);

            if (index === -1) {
              jobs.favorite = true;
              return { favoriteJobs: [...array, jobs] };
            } else {
              jobs.favorite = false;
              array.splice(index, 1);
              return { favoriteJobs: [...array] };
            }
          }),
      }),
      {
        name: "favorites-storage",
      },
    ),
  ),
);
