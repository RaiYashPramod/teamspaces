import { Token } from "@/types/user";
import { create } from "zustand";

interface AuthStore {
  token: Token | null;
  setToken: (token: Token | null) => void;
  isLoggedIn: boolean;
  userToken: Token | null;
}

const useAuthStore = create<AuthStore>((set) => ({
  token: null,
  setToken: (token) => set({ token }),
  isLoggedIn: !!localStorage.getItem("token"),
  userToken:  localStorage.getItem("token")
}));

export default useAuthStore;
