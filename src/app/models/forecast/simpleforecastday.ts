import { WU_SimpleForecastDayDate } from './simpleforecastdaydate';
import { WU_Temperature } from './temperature';
import { WU_Length } from './length';
import { WU_Wind } from './wind';

export class WU_SimpleForecastDay {
  date: WU_SimpleForecastDayDate;
  period: number;
  high: WU_Temperature;
  low: WU_Temperature;
  conditions: string;
  icon: string;
  icon_url: string;
  skyicon: string;
  pop: number;
  qpf_allday: WU_Length;
  qpf_day: WU_Length;
  qpf_night: WU_Length;
  snow_allday: WU_Length;
  snow_day: WU_Length;
  snow_night: WU_Length;
  maxwind: WU_Wind;
  avewind: WU_Wind;
  avehumidity: number;
  maxhumidity: number;
  minhumidity: number;
}