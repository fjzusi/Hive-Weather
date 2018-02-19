import { WU_TemperatureRecord } from './temperaturerecord';

export class WU_Almanac {
  airport_code: string;
  temp_high: WU_TemperatureRecord;
  temp_low: WU_TemperatureRecord;
}