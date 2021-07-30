import { createSelector } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { GitSearch } from '../../models/git-search';

export const selectModel = (state: any) => state.model;

export const selectRepositories = createSelector(
  selectModel,
  (model: IAppState) => model.repositories
);

export const selectIsLoading = createSelector(
  selectModel,
  (model: IAppState) => model.loading
);