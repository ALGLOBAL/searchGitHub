import { Injectable } from '@angular/core';
import { UnifiedSearch } from '../models/unified-search';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { GitSearchService } from './git-search.service';
import { GitSearch } from '../models/git-search';

@Injectable({
  providedIn: 'root'
})
export class UnifiedSearchService {

  constructor(
    private searchService: GitSearchService,
  ) { }

  unifiedSearch: Function = (query: string): Observable<UnifiedSearch> => {
      return forkJoin(
        // this.searchService.gitSearch(query),
      ).pipe(
        map((response: [GitSearch]) => {
          return {
            repositories: response[0]
          };
        })
      );
  }
}
