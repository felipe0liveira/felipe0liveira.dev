import { Component, OnInit } from '@angular/core';
import { CodepenService } from 'src/app/services/codepen-service/codepen.service';
import { Pen } from 'src/app/interfaces/codepen.interface';
import { WindowsService } from 'src/app/services/windows-service/windows.service';

@Component({
  selector: 'app-codepen',
  templateUrl: './codepen.component.html',
  styleUrls: ['./codepen.component.scss']
})
export class CodepenComponent implements OnInit {

  constructor(public windowsService: WindowsService, public codepenService: CodepenService) { }

  ngOnInit(): void {
    this.codepenService.updatePublishedPens(`felipe0liveira`);
  }

  goToPen(pen: Pen) {
    window.open(pen.link, '_blank');
  }

}
