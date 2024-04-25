import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JobService } from './services/job.service';
import { Job } from './services/job.model';
import { JobListComponent } from './components/job-list/job-list.component';
import { JobDetailComponent } from './components/job-detail/job-detail.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
}
