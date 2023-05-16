import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface TokenState {
  secretToken?: string;
  addSecretToken: (token: string) => void;
}

export const useTokenStore = create<TokenState>()(
  devtools(
    persist(
      (set) => ({
        secretToken: undefined,
        addSecretToken: (token) => set({ secretToken: token }), // async  with api
      }),
      {
        name: "token-storage",
      },
    ),
  ),
);
