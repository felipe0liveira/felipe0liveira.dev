import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class XMLService {

  constructor() { }

  toJson(xml: string): Document {
    const oParser = new DOMParser();
    const oDOM = oParser.parseFromString(xml, "application/xml");
    return oDOM;
  }
}
