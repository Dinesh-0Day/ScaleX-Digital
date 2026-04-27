import { create } from 'zustand';

interface AppState {
  isContactModalOpen: boolean;
  openContactModal: () => void;
  closeContactModal: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  isContactModalOpen: false,
  openContactModal: () => set({ isContactModalOpen: true }),
  closeContactModal: () => set({ isContactModalOpen: false }),
}));