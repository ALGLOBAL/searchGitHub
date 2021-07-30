import { GitSearch } from '../../models/git-search';
import { initRepositories } from './repositoryes.state';

export interface IAppState {
  repositories: GitSearch;
}

export const initialAppState: IAppState = {
  repositories: initRepositories,
};

