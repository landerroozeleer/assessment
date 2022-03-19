import create from 'zustand';

interface State {
  commits: any[]
  setCommits: (val: any) => void,
  resetCommits: () => void,
}

export const useCommitsStore = create<State>((set: any) => ({
  commits: [],
  setCommits: (data: any) => set(() => ({ commits: data })),
  resetCommits: () => set(() => ({ commits: [] })),
}));
