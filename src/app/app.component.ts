import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { LevelTwo, LevelThree } from './level.model';
import { levelTwoReducer, State } from './reducers';


import { ADD_LEVEL_2, REMOVE_LEVEL_2, TOGGLE_LEVEL_2,
          ADD_LEVEL_3, REMOVE_LEVEL_3, TOGGLE_LEVEL_3 } from './actions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'app';
  // top_level: Observable<LevelTwo>;
  top_level: any;

  constructor(private store: Store<State>) {
    this.top_level = store.select('operations');
    this.store.dispatch({ type: ADD_LEVEL_3 });
    console.log(this.top_level);
    console.log(this.top_level.level_two);
    console.log(store.select('level_two_reducer'));
  }
}
