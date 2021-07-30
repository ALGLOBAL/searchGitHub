import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UnifiedSearchService } from '../../services/unified-search.service';

@Component({
  selector: 'app-git-search',
  templateUrl: './git-search.component.html',
  styleUrls: ['./git-search.component.scss']
})
export class GitSearchComponent implements OnInit {
  searchResults = {
    repositories: {
      total_count: 0
    }
  };
  isLoad: boolean = false;
  searchQuery: string;

  constructor(private unifiedSearchService: UnifiedSearchService, private route: ActivatedRoute, private router: Router) {};

  // noSpecialChars (c: FormControl) {
  //   const regExp = new RegExp(/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/);
  //   return regExp.test(c.value) ? {
  //     validateEmail: {
  //       valid: false
  //     }
  //   } : null;
  // };

  ngOnInit() {};

  gitSearch = () => {
    console.log('gitSearch');

    this.unifiedSearchService.unifiedSearch(this.searchQuery)
      .subscribe((res) => {
        console.log('subscribe', res);

        this.searchResults = res;

        this.isLoad = false;
      }, error => {
        console.warn(error);
        alert(`Error: ${error.statusText}`);
      });
  };

  sendQuery = () => {
    // console.log('sendQuery');
    // this.searchResults = null;
    // const search: string = this.form.value[this.input];
    // console.log('sendQuery search', search);
    // let params = '';
    //
    // this.searchQuery = search;
    //
    // if (params !== '') {
    //   this.searchQuery = `${search}${params}`;
    // }
    // console.log('sendQuery this.searchQuery', this.searchQuery);
    // this.displayQuery = this.searchQuery;
    // this.gitSearch();
  };

  onChange = (event) => {
    this.isLoad = true;
    this.searchQuery = event.target.value;
    this.gitSearch();
  }
}
