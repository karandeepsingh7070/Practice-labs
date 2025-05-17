import {create} from "zustand"

type UserState = {
    isLoggedIn: boolean;
    setLoggedIn: (value: boolean) => void;
  };

const useUserState = create<UserState>((set) => ({
    isLoggedIn: false,
    setLoggedIn: (value) => set({ isLoggedIn: value }),
}))

export {useUserState}