import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Repository } from 'src/app/interfaces/github.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  $repositories: Observable<Repository[]>;

  constructor(private http: HttpClient) {}

  updateRepositories(): void {
    this.http.get<Repository[]>(environment.github.repos).subscribe((repos) => {
      this.$repositories = new Observable((o) => o.next(repos));
    });
  }
}
