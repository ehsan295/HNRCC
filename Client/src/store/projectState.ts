import create from "zustand";

interface Project {}
export const useProjectState = create<Project>(() => ({}));
