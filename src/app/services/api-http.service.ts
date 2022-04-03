import {Injectable, isDevMode} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable, of} from 'rxjs';

import {environment} from "@src/environments/environment";

import {
  GetAllEmergenciesResponse
} from '@services/dtos/http-responses/get-all-emergencies/get-all-emergencies-response';

import {ApiHttp} from "@services/interfaces/api-http";

@Injectable({
  providedIn: 'root'
})
export class ApiHttpService implements ApiHttp {

  private readonly apiUrl = `${environment.apiUrl}`;

  constructor(private http: HttpClient) {
  }

  public getAllEmergencies(): Observable<GetAllEmergenciesResponse> {
    // added because of CORS error
    if (isDevMode()) {
      const localStorageResult = localStorage.getItem('getAllEmergencies');
      if (localStorageResult)
        return of(JSON.parse(localStorageResult));
    }

    return this.http.get<GetAllEmergenciesResponse>(`${this.apiUrl}getAllEmergencies`);
  }
}
