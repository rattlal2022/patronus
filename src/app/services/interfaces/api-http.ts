import {Observable} from "rxjs";
import {
  GetAllEmergenciesResponse
} from "@services/dtos/http-responses/get-all-emergencies/get-all-emergencies-response";

export interface ApiHttp {
  getAllEmergencies(): Observable<GetAllEmergenciesResponse>;
}
