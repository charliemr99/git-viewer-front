import axios from "axios";
import { baseUrl } from "../constants";
// import { CommitsFailure } from "../redux/commits/commits.types";
import { ICommit, IGetCommitsActionProps } from "../types/commits";

const commitsBaseUrl = `${baseUrl}/commits`;
const client = axios.create();

export const getCommits = async ({
  username,
  repository,
}: IGetCommitsActionProps) => {
  try {
    const response = await client.get(commitsBaseUrl, {
      params: { username, repository },
    });
    return [response.data as ICommit[], null];
  } catch (error: any) {
    switch (error.code) {
      case 404:
        return [null, "REPOSITORY_NOT_FOUND"];
      default:
        return [null, error];
    }
  }
};
