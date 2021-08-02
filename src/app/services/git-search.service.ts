import { GitSearch } from '../models/git-search';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GitSearchService {
  constructor (private http: HttpClient) {}

  getSearch(query: string) {
    const url = `https://api.github.com/search/repositories?q=${query}`;

    return this.getQuery(url);
  }

  getQuery(url: string) {
    return this.http.get<any>(url);
  }
}
