import {create} from "zustand"

type UserState = {
    isModalOpen: boolean; 
    setIsModalOpen: (value: boolean) => void;
  };

  export const useToggleLoginForm = create<UserState>((set) => ({
    isModalOpen : false,
    setIsModalOpen: (value) => set({ isModalOpen: value }),
  }))
