import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JobListComponent } from './job-list/job-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JobListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ng-job-search';
  selectAll = true;

  navigateToFavorites() {
    this.selectAll = !this.selectAll;
  }

  navigateToJobs() {
    this.selectAll = !this.selectAll;
  }
}
