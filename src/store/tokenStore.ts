import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import JobRequestResponse from "../API/jobrequest";

interface TokenState {
  secretToken: string | null;
  addSecretToken: (token: string) => void;
}

export const useTokenStore = create<TokenState>()(
  devtools(
    persist(
      (set) => ({
        secretToken: null,
        addSecretToken: (token) => set({ secretToken: token }), // async  with api
      }),
      {
        name: "token-storage",
      },
    ),
  ),
);
