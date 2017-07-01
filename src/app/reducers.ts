import { ActionReducer, Action } from '@ngrx/store';

import { LevelTwo, LevelThree } from './level.model';


import { ADD_LEVEL_2, REMOVE_LEVEL_2, TOGGLE_LEVEL_2,
          ADD_LEVEL_3, REMOVE_LEVEL_3, TOGGLE_LEVEL_3 } from './actions';


export interface State {
  level_two: LevelTwo;
};

const initial_level_3: Array<LevelThree> = [
    {index:1, service_code:"BD-1800.2000", service_name: "Food Pantry", active: false},
    {index:2, service_code:"BD-1800.8200-250", service_name: "Formula/Baby Food", active: false},
    {index:3, service_code:"BD-5000.1470", service_name: "Community Meals", active: false}
  ];

export const initialState: State = {
  level_two: {service_code:"BD", service_name:"Food", active: false, subservices: initial_level_3, sub_count:3, sub_active:0}
}


export function levelTwoReducer(state = initialState, action: Action) {
  switch (action.type) {
          case REMOVE_LEVEL_2: {
                  console.log("REMOVE_LEVEL_2");
                  for (var item of state.level_two.subservices) {
                    item.active = false;
                  }
                  state.level_two.sub_active = 0;
                  return state;
                }
          case ADD_LEVEL_2: {
                  for (var item of state.level_two.subservices) {
                    item.active = true;
                  }
                  state.level_two.sub_active = state.level_two.sub_count;
                  return state;
                }
          case REMOVE_LEVEL_3: {
                  if(state.level_two.sub_active == 1) {
                    state.level_two.active = false;
                  }
                  state.level_two.sub_active -= 1;
                  return state;
                }
          case ADD_LEVEL_3: {
                  if(state.level_two.sub_active == 0) {
                    state.level_two.active = true;
                  }
                  state.level_two.sub_active += 1;
                  return state;
                }

          default: {return state;}

        }
}

export const getActiveSubCount = (state: State) => state.level_two.sub_count;
