import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pen } from 'src/app/interfaces/codepen.interface';
import { environment } from 'src/environments/environment';
import { XMLService } from '../utils/xml.service';

@Injectable({
  providedIn: 'root'
})
export class CodepenService {

  $pens: Observable<Pen[]>;
  constructor(private http: HttpClient, public XML: XMLService) { }

  updatePublishedPens(username: string) {
    let pens = [];
    this.http.get(`${environment.codepen.pens}/${username}/public/feed`).subscribe(res => {
    }, err => {
      const xml = this.XML.toJson(err.error.text);
      const xmlItems = xml.getElementsByTagName('item');

      if (!xmlItems.length) {
        console.warn(`Cannot retrive the Codepen RSS to get public feed`);
        return;
      }

      for (let i = 0; i < xmlItems.length; i++) {
        const xmlItem = xmlItems.item(i);
        pens.push({
          title: xmlItem.getElementsByTagName('title').item(0).innerHTML,
          link: xmlItem.getElementsByTagName('link').item(0).innerHTML,
          creation: new Date(xmlItem.getElementsByTagName('dc:date').item(0).innerHTML.trim())
        });
      }

      this.$pens = new Observable((observer) => {
        observer.next(pens);
      });
    });
  }


}
