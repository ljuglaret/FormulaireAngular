import { Component , Input, Output, EventEmitter} from '@angular/core';
import { NgModule } from '@angular/core';
import { QCM } from '../qcm';
import {QcmResultatComponent} from '../qcm-resultat/qcm-resultat.component';
import { Routes, RouterModule, Router, RouterLink } from "@angular/router";


var stringToHTML = function (str) {
	var parser = new DOMParser();
	var doc = parser.parseFromString(str, 'text/html');
	return doc.body;
};

@Component({
  selector: 'app-qcm-form',
 //templateUrl: './qcm-form.component.html',
  styleUrls: ['./qcm-form.component.css'],

  template: `
  <div class="container">
  <div [hidden]="submitted">
    <h1>QCM</h1>
  <form (ngSubmit)="onSubmit()" #qcmForm="ngForm">
   <div *ngFor="let liste of this.qcminitial; let in=index" >
        <div class="form-group">        
            <h2> Question {{in}} </h2>
            <label for="choix1Q{{in}}">Choix1</label>
            <input type="radio" id="choix1Q{{in}}" name="question{{in}}"
                value=1 [(ngModel)]="this.qcminitial[in].repFournie">
            <label for="choix2">Choix2</label>
            <input type="radio" id="choix1Q{{in}}" name="question{{in}}"
              value= 2 [(ngModel)]="this.qcminitial[in].repFournie"/>
        </div>
  </div>
  <nav>
  <a routerLink="/qcm-resultat" routerLinkActive="active">Correction</a>
</nav>   

</form>
</div>
   `
})
export class qcmFormComponent {
  @Input()
  reps = [];

  @Output()
  change: EventEmitter<any> = new EventEmitter();

  increment() {
    this.reps[0] = 5//this.qcminitial[0].repFournie ;
    this.change.emit(this.reps);
    //this.qcminitial[0].repFournie = 5;
    this.change.emit(this.qcminitial);

  }

  qcminitial = [{numQuestion: 0, repFournie:null, repCorrecte:1},
                {numQuestion:1,repFournie:null, repCorrecte:1}
              ]
  
  model =  new QCM(this.qcminitial);

  submitted = false;

  
  onSubmit() { this.submitted = true; 
  
  }

  newqcm() {
    this.model =  new QCM(this.qcminitial);
  }
  


}
