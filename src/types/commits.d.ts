export interface ICommit {
  id: string;
  message: string;
  author: string;
  avatarSrc: string;
  date: Date;
  sha: string;
}

export interface IGetCommitsActionProps {
  username: string;
  repository: string;
}
