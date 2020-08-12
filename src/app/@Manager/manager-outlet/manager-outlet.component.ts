import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { MarketplaceService } from 'src/app/services/marketplace-service/marketplace.service';

@Component({
  selector: 'app-manager-outlet',
  templateUrl: './manager-outlet.component.html',
  styleUrls: ['./manager-outlet.component.scss'],
})
export class ManagerOutletComponent implements OnInit {
  constructor(
    private router: Router,
    public authService: AuthService,
    public marketplaceService: MarketplaceService
  ) {}

  ngOnInit(): void {}

  busy = () => this.marketplaceService.busy;

  goTo(path) {
    const url = window.location.href;
    const pathname = url.substr(url.indexOf('/#/') + 2);
    if (pathname === '/manager/dashboard') {
      if (confirm(`Do you really want to Logout?`)) {
        this.authService.signOut().then(
          () => {
            console.log('User logged out successfuly');
          },
          (err) => {
            console.log('User cannot be logged out', err);
          }
        );
        this.router.navigate(['/']);
      }
      return;
    }
    this.router.navigate([path]);
  }
}
