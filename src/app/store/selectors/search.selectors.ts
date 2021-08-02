import { createSelector } from '@ngrx/store';

import { IAppState } from '../state/app.state';

export const selectModel = (state: any) => state.model;

export const selectRepositories = createSelector(
  selectModel,
  (model: IAppState) => model.repositories
);

export const selectIsLoading = createSelector(
  selectModel,
  (model: IAppState) => model.loading
);

export const selectAdditionalData = createSelector(
  selectModel,
  (model: IAppState) => model.additionalData
);
