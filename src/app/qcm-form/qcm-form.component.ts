import { Component , Input, Output, EventEmitter} from '@angular/core';
import { NgModule } from '@angular/core';
import { QCM } from '../qcm';
import {QcmResultatComponent} from '../qcm-resultat/qcm-resultat.component';
import { Routes, RouterModule, Router, RouterLink } from "@angular/router";



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
            <h2 >Question {{this.qcminitial[in].numQuestion + 1}}</h2>
            <label for="choix1Q{{in}}">{{this.qcminitial[in].choix[0]}}</label>
            <input type="radio" id="choix1Q{{in}}" name="question{{in}}"
                value=0 [(ngModel)]="this.qcminitial[in].repFournie">
            <label for="choix2">{{this.qcminitial[in].choix[1]}}</label>
            <input type="radio" id="choix1Q{{in}}" name="question{{in}}"
              value= 1 [(ngModel)]="this.qcminitial[in].repFournie"/>
        </div>
  </div>
  <nav>
  <a (click)="submitBtn()" routerLink="/qcm-resultat" routerLinkActive="active">Correction</a>
</nav>   
   `
})
export class qcmFormComponent {
  constructor(private dataService: QCM) { }
  qcminitial = [{intituleQuestion: "q1", numQuestion: 0, repFournie:null, repCorrecte:0, choix:["q1c1", "q1c2"]},
                {intituleQuestion: "q2",numQuestion:1,repFournie:null, repCorrecte:1,choix:["q2c1", "q2c2"]}
              ]

  
  model =  new QCM();

  submitted = false;

  
  onSubmit() { this.submitted = true; 
  
  }

  newqcm() {
    this.model =  new QCM();
  }

  submitBtn() {
    this.dataService.setQcm({
    listeQuestionsReponses :
    [{intituleQuestion:this.qcminitial[0].intituleQuestion, numQuestion: 0, repFournie: this.qcminitial[0].repFournie, repCorrecte:this.qcminitial[0].repCorrecte,choix:this.qcminitial[0].choix},
        {intituleQuestion:this.qcminitial[1].intituleQuestion,numQuestion:1,repFournie: this.qcminitial[1].repFournie, repCorrecte:this.qcminitial[1].repCorrecte,choix:this.qcminitial[1].choix}
    ]
    }
  
    );
  }
  


}
