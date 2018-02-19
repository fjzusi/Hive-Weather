import { WU_Response } from '../response';
import { WU_Moon_Phase } from './moonphase';
import { WU_Sun_Phase } from './sunphase';

export class WU_Astronomy {
  response: WU_Response;
  moon_phase: WU_Moon_Phase;
  sun_phase: WU_Sun_Phase;
}