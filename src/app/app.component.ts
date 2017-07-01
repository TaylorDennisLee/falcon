import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { LevelTwo, LevelThree } from './level.model';
import * as fromReducers from './reducers';


import { ADD_LEVEL_2, REMOVE_LEVEL_2, TOGGLE_LEVEL_2,
          ADD_LEVEL_3, REMOVE_LEVEL_3, TOGGLE_LEVEL_3 } from './actions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'app';
  top_level: Observable<LevelTwo>;
  sub_data;
//  top_level: any;
  //public model;

  constructor(private store: Store<fromReducers.State>) {
    this.sub_data = this.store.select(fromReducers.getActiveSubCount);
    this.top_level = this.store.select('level_two');
    console.log(this.top_level.subscribe());
    this.store.dispatch({ type: ADD_LEVEL_3 });
    console.log(this.top_level);
    console.log(this.sub_data);
  }
}
