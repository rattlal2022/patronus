import {Device} from "../../entities/device";
import {Emergency} from "../../entities/emergency";
import {Holder} from "../../entities/holder";

export interface GetAllEmergenciesResponseContent {
  emergency: Emergency;
  device: Device;
  holder: Holder;
}
