import { Component, Input } from '@angular/core';
import { Job } from '../../services/job.model';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-job-detail',
  standalone: true,
  imports: [MatIconModule, MatChipsModule],
  templateUrl: './job-detail.component.html',
  styleUrl: './job-detail.component.css',
})
export class JobDetailComponent {
  @Input() jobDetail!: Job;
}
