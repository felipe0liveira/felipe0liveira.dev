import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WindowsService {
  constructor() {}

  close() {
    if (confirm('Deseja realmente fechar esta janela?')) {
      alert('Brincou :O\nVocê ia fechar mesmo...');
    }
  }

  minimize() {
    alert('Sério?\nVocê achou mesmo que ia minimizar?');
  }
}
