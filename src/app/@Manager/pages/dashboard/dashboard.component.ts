import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private router: Router) {
    document.title = 'Felipe 0liveira - Manager/Dashboard (Win98)';
  }

  ngOnInit(): void {}

  goTo = (path) => this.router.navigate([path]);
}
