import { Component } from '@angular/core';
import { QCM } from './qcm';

@Component({
  selector: 'app-root',
  template:`
  <body >
    <div *ngIf="!qcmCommence">
    <h1 >Bienvenue dans ce questionnaire animalier</h1>
    <nav   >
      <a (click)="qcmCommence= !qcmCommence" routerLink="/qcm-form"
          routerLinkActive="active"
      > Debuter QCM</a>
    </nav>
    </div>

    <router-outlet></router-outlet>
</body>

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  constructor(private dataService: QCM) {  

}
qcmCommence = false;
} 
