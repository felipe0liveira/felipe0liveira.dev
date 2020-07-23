import { Component, OnInit } from '@angular/core';
import { WindowsService } from 'src/app/services/windows-service/windows.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  constructor(public windowsService: WindowsService) {}

  ngOnInit(): void {}
}
