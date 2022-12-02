import create from 'zustand';

type UserGithub = {
  id: string;
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
  company: string;
  bio: string;
  followers: string;
};

export type IssuesGithub = {
  url: string;

  html_url: string;
  id: number;
  number: number;
  title: string;
  body: string;
  comments: number;
  user: UserGithub;
  created_at: string;
};

type GithubDataStore = {
  user: UserGithub;
  issues: IssuesGithub[];
  setUser: (user: UserGithub) => void;
  setIssues: (issues: IssuesGithub[]) => void;
};

export const useGithubDataStore = create<GithubDataStore>((set) => ({
  user: {} as UserGithub,
  issues: [] as IssuesGithub[],
  setUser: (user: UserGithub) => set((state) => ({ user })),
  setIssues: (issues: IssuesGithub[]) => set((state) => ({ issues })),
}));
