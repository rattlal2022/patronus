import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";

import {TableModule} from 'primeng/table';

import {AppComponent} from './app.component';

import {HolderFullNamePipe} from '@pipes/holder-full-name.pipe';
import {HttpInterceptorService} from "@services/http-interceptor.service";

@NgModule({
  declarations: [
    AppComponent,
    HolderFullNamePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TableModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
