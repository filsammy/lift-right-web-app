import { create } from "zustand";

interface LiftState {
  lifts: string[];
  addLift: (lift: string) => void;
}

export const useLiftStore = create<LiftState>((set) => ({
  lifts: [],
  addLift: (lift) =>
    set((state) => ({ lifts: [...state.lifts, lift] })),
}));
