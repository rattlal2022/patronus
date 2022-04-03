import {Injectable} from "@angular/core";

import {Observable, of} from "rxjs";

import {
  GetAllEmergenciesResponse
} from "@services/dtos/http-responses/get-all-emergencies/get-all-emergencies-response";
import {ApiHttp} from "@services/interfaces/api-http";

@Injectable()
export class ApiHttpServiceStub implements ApiHttp {
  data = {
    content: [{
      emergency: {
        emergencyId: "2f7d8518-31be-4d81-ba7a-de2abgc2c498",
        requestTime: "2021-11-08T14:04:52.365+00:00"
      },
      device: {
        "serialNumber": "RFAZ22FWAKZ"
      },
      holder: {
        firstName: "Jonah",
        lastName: "Johnson"
      }
    }]
  } as GetAllEmergenciesResponse;

  public getAllEmergencies(): Observable<GetAllEmergenciesResponse> {
    return of(this.data!);
  }
}
