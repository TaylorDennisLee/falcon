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
  top_level_active = false;
  constructor(private store: Store<fromReducers.State>) {
    this.top_level = this.store.select('level_two');
  }

  lvlToggle(levelThreeService: LevelThree)
  {
    if (levelThreeService.active) {
      this.store.dispatch({type: REMOVE_LEVEL_3});
    }
    if (!levelThreeService.active) {
      this.store.dispatch({type: ADD_LEVEL_3});
    }

    levelThreeService.active = !levelThreeService.active;
  }

  topToggle()
  {
    if (this.top_level_active == true) {
      console.log("Dispatch: REMOVE_LEVEL_2");
      this.store.dispatch({type: REMOVE_LEVEL_2});
      this.top_level_active = false;
    }
    else if (this.top_level_active == false) {
      console.log("Dispatch: ADD_LEVEL_2");
      this.store.dispatch({type: ADD_LEVEL_2});
      this.top_level_active = true;
    }
  }


}
