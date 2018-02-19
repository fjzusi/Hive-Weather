import { WU_Time } from './time';

export class WU_Moon_Phase {
  percentIlluminated: number;
  ageOfMoon: number;
  phaseofMoon: string;
  hemisphere: string;
  current_time: WU_Time;
  sunrise: WU_Time;
  sunset: WU_Time;
  moonrise: WU_Time;
  moonset: WU_Time;
}