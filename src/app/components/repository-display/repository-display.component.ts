import { Component, OnInit, Input } from '@angular/core';
import { GitSearch } from '../../models/git-search';
import * as actions from "../../store/actions/search.actions";
import {Store} from "@ngrx/store";
import {IAppState} from "../../store/state/app.state";

@Component({
  selector: 'app-repository-display',
  templateUrl: './repository-display.component.html',
  styleUrls: ['./repository-display.component.scss']
})
export class RepositoryDisplayComponent implements OnInit {
  @Input() searchResults: GitSearch;

  constructor(
    private store: Store<IAppState>,
  ) {};

  ngOnInit() {
  };

  onClick(url) {
    this.store.dispatch(actions.getAdditionalReposData({ payload: {
        query: url,
      }
    }));
  };
}
