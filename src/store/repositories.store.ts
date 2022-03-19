import create from 'zustand';

interface State {
  repositories: any[]
  setRepositories: (val: any) => void
}

export const useRepoStore = create<State>((set) => ({
  repositories: [],
  setRepositories: (data: any) => set(() => ({ repositories: data })),
}));
