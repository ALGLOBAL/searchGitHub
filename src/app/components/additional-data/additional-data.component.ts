import { Component, OnInit, Input } from '@angular/core';
import { GitAdditionalData } from '../../models/git-additional-data';
import * as actions from "../../store/actions/search.actions";
import {Store} from "@ngrx/store";
import {IAppState} from "../../store/state/app.state";

@Component({
  selector: 'app-additional-data',
  templateUrl: './additional-data.component.html',
  styleUrls: ['./additional-data.component.scss']
})
export class AdditionalDataComponent implements OnInit {
  @Input() additionalData;

  constructor(
    private store: Store<IAppState>,
  ) {};

  ngOnInit() {
  };

  onClick() {
    this.store.dispatch(actions.clearAdditionalReposData());
  };
}
