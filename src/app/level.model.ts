export interface LevelOne {
  


}


export interface LevelTwo {
  service_code: string;
  service_name: string;
  active: boolean;
  subservices: Array<LevelThree>;
  sub_count: number;
  sub_active: number;
}


export interface LevelThree {
  index: number;
  service_code: string;
  service_name: string;
  active: boolean;
}
