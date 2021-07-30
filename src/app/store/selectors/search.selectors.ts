import { createSelector } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { GitSearch } from '../../models/git-search';

export const selectRepositories = (state: IAppState) => state.repositories;
