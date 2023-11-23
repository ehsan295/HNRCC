import create from "zustand";

interface Project {
  count: number;
  increaseCount: (by: number) => void;
}
export const useProjectState = create<Project>()((set) => ({
  count: 0,
  increaseCount: (by) => set((state) => ({ count: 5 })),
}));
