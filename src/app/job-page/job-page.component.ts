import { Component, OnInit, inject } from '@angular/core';
import { JobService } from '../services/job.service';
import { Job } from '../services/job.model';
import { JobListComponent } from '../components/job-list/job-list.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-page',
  standalone: true,
  imports: [JobListComponent],
  templateUrl: './job-page.component.html',
  styleUrl: './job-page.component.css',
})
export class JobPageComponent implements OnInit {
  jobService = inject(JobService);
  router = inject(Router);

  jobs: Job[] = [];
  jobFavorites: Job[] = [];

  displayView: string = 'LIST';

  ngOnInit(): void {
    this.jobService.getJobs().subscribe((jobs) => {
      this.jobs = jobs;
    });
  }

  addToFavorites(job: Job) {
    this.jobFavorites.push(job);
  }

  navigateToFavorites() {
    this.displayView = 'FAVORITES';
  }

  navigateToJobs() {
    this.displayView = 'LIST';
  }

  navigateToJobDetails(id: number) {
    this.router.navigate(['/detail', id]);
  }
}
