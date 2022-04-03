import {Component, OnInit} from '@angular/core';

import {
  GetAllEmergenciesResponseContent
} from '@services/dtos/http-responses/get-all-emergencies/get-all-emergencies-response-content';

import {ApiHttpService} from '@services/api-http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  loading = true;
  showErrorMessage = false;
  data: GetAllEmergenciesResponseContent[] = [];

  constructor(private apiHttpService: ApiHttpService) {
  }

  ngOnInit(): void {
    this.loadData();
  }

  private loadData() {
    this.apiHttpService.getAllEmergencies().subscribe({
      next: x => {
        this.data = x.content!;
      },
      error: () => this.showErrorMessage = true,
      complete: () => this.loading = false
    });
  }

}
