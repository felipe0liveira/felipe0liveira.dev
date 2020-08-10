import { Component, OnInit } from '@angular/core';
import { WindowsService } from 'src/app/services/windows-service/windows.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(public windowsService: WindowsService) {}

  ngOnInit(): void {}
}
