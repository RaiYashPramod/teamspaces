import { Token } from "@/types/user";
import { create } from "zustand";

interface AuthStore {
  token: Token | null;
  setToken: (token: Token | null) => void;
  isLoggedIn: boolean;
  logout: () => void;
}

const useAuthStore = create<AuthStore>((set) => ({
  token: null,
  setToken: (token) => set({ token }),
  isLoggedIn: !!localStorage.getItem("token"),
  logout: () => {
    localStorage.removeItem("token");
    set({ token: null });
  },
}));

export default useAuthStore;
