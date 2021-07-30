import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidatorFn } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { UnifiedSearchService } from '../../services/unified-search.service';
import { GitSearch } from '../../models/git-search';

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
  title: string;
  displayQuery: string;
  form: FormGroup;
  formControls = {};
  input: string = 'q';

  text: string = '';
  res: string = '';

  constructor(private unifiedSearchService: UnifiedSearchService, private route: ActivatedRoute, private router: Router) {
    // const validators: Array<ValidatorFn> = [this.noSpecialChars];
    // validators.push(Validators.required);
    //
    // this.formControls[this.input] = new FormControl(this.input, validators);
    // this.form = new FormGroup(this.formControls);
  };

  noSpecialChars (c: FormControl) {
    const regExp = new RegExp(/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/);
    return regExp.test(c.value) ? {
      validateEmail: {
        valid: false
      }
    } : null;
  };

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
    console.log('onClick', event, this);
    this.res = event.data;
    this.searchQuery = event.data;
    this.displayQuery = event.data;
    this.gitSearch();
  }
}
