export interface UserData {
  avatar_url: string;
  name: string;
  bio: string;
  login: string;
  company: string | null;
  followers: number;
}

export interface CardData {
  id: number;
  number: number;
  title: string;
  created_at: string;
  body: string;
}

export interface IssuesReturn {
  incomplete_results: boolean;
  items: CardData[];
  total_count: number;
}

export interface IssueUser {
  login: string;
}

export interface IssueData {
  title: string;
  user: IssueUser;
  updated_at: string;
  comments: number;
  html_url: string;
  body: string;
}

export interface IssueReturn {
  data: IssueData;
}
