import { Component, OnInit, inject } from '@angular/core';
import { JobService } from '../services/job.service';
import { Job } from '../services/job.model';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [MatListModule, MatIconModule],
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.css',
})
export class JobListComponent implements OnInit {
  jobService = inject(JobService);
  jobs: Job[] = [];

  ngOnInit(): void {
    this.jobService.getJobs().subscribe((jobs) => {
      this.jobs = jobs;
    });
  }
}
