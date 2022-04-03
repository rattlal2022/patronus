import {HttpClientModule} from '@angular/common/http';
import {TestBed} from '@angular/core/testing';

import {ApiHttpService} from './api-http.service';
import {ApiHttpServiceStub} from "@services/api-http-service.service.stub";
import {Emergency} from "@services/dtos/entities/emergency";
import {Device} from "@services/dtos/entities/device";
import {Holder} from "@services/dtos/entities/holder";

describe('ApiHttpService', () => {
  let service: ApiHttpServiceStub;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [ApiHttpServiceStub]});
    service = TestBed.inject(ApiHttpServiceStub);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getAllEmergencies result should not be undefined or null', () => {
    service.getAllEmergencies().subscribe(x => {
      expect(x).toEqual(jasmine.anything());
    });
  });

  it('#getAllEmergencies.content should not be undefined or null', () => {
    service.getAllEmergencies().subscribe(x => {
      expect(x.content).toEqual(jasmine.anything());
    });
  });

  it('#getAllEmergencies should return one emergency', () => {
    service.getAllEmergencies().subscribe(x => {
      expect(x.content.length).toEqual(1);
    });
  });

  it('#getAllEmergencies should return emergency data with emergency not undefined or null', () => {
    service.getAllEmergencies().subscribe(x => {
      expect(x.content[0].emergency).toEqual(jasmine.anything());
    });
  });

  it('#getAllEmergencies should return emergency with filled holder', () => {
    service.getAllEmergencies().subscribe(x => {
      expect(x.content[0].holder).toEqual(jasmine.anything());
    });
  });

  it('#getAllEmergencies should return emergency with filled device', () => {
    service.getAllEmergencies().subscribe(x => {
      expect(x.content[0].device).toEqual(jasmine.anything());
    });
  });

});
