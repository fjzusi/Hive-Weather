import { WU_Response } from './response';
import { WU_Observation } from './observation';

export class WU_Condition {
  response: WU_Response;
  current_observation: WU_Observation;
}