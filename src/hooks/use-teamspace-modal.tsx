import {create} from 'zustand';

interface useTeamSpace {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useTeamSpaceModal = create<useTeamSpace>((set) => ({
  isOpen: true,
  onOpen: () => set({isOpen: true}),
  onClose: () => set({isOpen: false}),
}));