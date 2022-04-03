import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TableModule} from 'primeng/table';

import {AppComponent} from './app.component';

import {HolderFullNamePipe} from "@pipes/holder-full-name.pipe";

import {ApiHttpServiceStub} from "@services/api-http-service.service.stub";
import {ApiHttpService} from '@services/api-http.service';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, HolderFullNamePipe],
      imports: [TableModule],
      providers: [{provide: ApiHttpService, useClass: ApiHttpServiceStub}]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should have headers row and single row with data', () => {
    const rows: Array<HTMLTableRowElement> = fixture.nativeElement.querySelectorAll('tr');
    expect(rows.length).toBe(2);
  })

  it('should not show data loading error', () => {
    const rows: Array<HTMLHeadingElement> = fixture.nativeElement.querySelectorAll('h1');
    expect(rows.length).toBe(0);
  });

});
