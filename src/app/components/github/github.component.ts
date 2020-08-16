import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github-service/github.service';
import { WindowsService } from 'src/app/services/windows-service/windows.service';
import { Repository } from 'src/app/interfaces/github.interface';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss'],
})
export class GithubComponent implements OnInit {
  constructor(
    public githubService: GithubService,
    public windowsService: WindowsService
  ) {}

  ngOnInit(): void {
    this.githubService.updateRepositories();
  }
}
