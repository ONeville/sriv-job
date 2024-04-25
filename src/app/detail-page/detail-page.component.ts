import { Component, OnInit, inject } from '@angular/core';
import { JobDetailComponent } from '../components/job-detail/job-detail.component';
import { Job } from '../services/job.model';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute } from '@angular/router';
import { JobService } from '../services/job.service';

@Component({
  selector: 'app-detail-page',
  standalone: true,
  imports: [MatIconModule, JobDetailComponent],
  templateUrl: './detail-page.component.html',
  styleUrl: './detail-page.component.css',
})
export class DetailPageComponent implements OnInit {
  activeRoute = inject(ActivatedRoute);
  jobService = inject(JobService);
  
  jobDetail: Job | null = null;

  ngOnInit(): void {
    this.jobService.getJob(this.activeRoute.snapshot.params['id']).subscribe((job) => {
      this.jobDetail = job
    })
  }
}
