import { GitSearch } from '../../models/git-search';
import { GitAdditionalData } from '../../models/git-additional-data';
import { initRepositories } from './repositoryes.state';

export interface IAppState {
  loading: boolean;
  repositories: GitSearch;
  additionalData: GitAdditionalData;
}

export const initialAppState: IAppState = {
  loading: true,
  repositories: initRepositories,
  additionalData: null,
};

