import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Job } from '../../services/job.model';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [MatListModule, MatIconModule, MatButtonModule],
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.css',
})
export class JobListComponent {
  @Input() jobs: Job[] = [];
  @Input() isListView: boolean = true;
  @Output() onAddToFavorites = new EventEmitter<Job>();
  @Output() onViewDetails = new EventEmitter<number>();

  addToFavorites(job: Job) {
    this.onAddToFavorites.emit(job);
  }

  navigateToJobDetails(job: Job) {
    this.onViewDetails.emit(job.id);
  }
}
