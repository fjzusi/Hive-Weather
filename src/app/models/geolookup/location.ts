import { WU_WeatherStations } from './weatherstations';

export class WU_Location {
  type: string;
  country: string;
  country_iso3166: string;
  country_name: string;
  state: string;
  city: string;
  tz_short: string;
  tz_long: string;
  lat: number;
  lon: number;
  zip: string;
  magic: number;
  wmo: number;
  l: string;
  requesturl: string;
  wuiurl: number;
  nearby_weather_stations: WU_WeatherStations;
}