import { Component, OnInit } from '@angular/core';
import { WindowsService } from './services/windows-service/windows.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(public windowsService: WindowsService) {}

  ngOnInit(): void {}
}
