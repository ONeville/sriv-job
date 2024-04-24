import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Job } from './job.model';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  http = inject(HttpClient);

  getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>('/jobs');
  }

  getJob(id: number): Observable<Job> {
    return this.http.get<Job>(`/jobs/${id}`);
  }
}
