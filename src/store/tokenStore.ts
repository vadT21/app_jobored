import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { TokenRequest } from "../API";
import { TOKEN_LIVE_TIME } from "../constants";

interface TokenState {
  loading: boolean;
  error: any;
  ttl: number;
  secretToken: string;
  fetchSecretToken: () => void;
}

export const useTokenStore = create<TokenState>()(
  devtools(
    persist(
      (set, get) => ({
        loading: true,
        error: null,
        secretToken: "",
        ttl: 0,
        fetchSecretToken: async () => {
          const checkToken = Date.now() - get().ttl;
          if (checkToken > TOKEN_LIVE_TIME || get().loading) {
            try {
              set({ loading: true });

              const res = await TokenRequest();
              console.log(res);
              if (!res) throw new Error("Failed to fetch! Try again.");
              set({
                secretToken: res,
                ttl: Date.now(),
                error: null,
              });
            } catch (error: any) {
              set({ error: error.message });
            } finally {
              set({ loading: false });
            }
          }
        },
      }),

      {
        name: "token-storage",
      },
    ),
  ),
);
