
import { Component, Injectable, Input, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { QCM } from '../qcm';
import {qcmFormComponent} from '../qcm-form/qcm-form.component';
  @Component({
    selector : "resultat",
    providers:[qcmFormComponent],
    template : `
    <h2>Vous avez envoyé</h2>
      <table *ngFor="let liste of this.updateQcm.listeQuestionsReponses ; let in=index">
  
        <tr >
          <h2> {{updateQcm.listeQuestionsReponses[in].intituleQuestion}} </h2>
          
           
          <h2
          [ngStyle]=" { 'background-color' : 
                              updateQcm.listeQuestionsReponses[in].repFournie == updateQcm.listeQuestionsReponses[in].repCorrecte
                              ? 'green' : 'red' 
                      }"
          >  
      
            {{ updateQcm.listeQuestionsReponses[in].choix[updateQcm.listeQuestionsReponses[in].repFournie] }}
          
          </h2>
  
          
          
        </tr>
        
        </table>
      <br>
      <nav>
  <a routerLink="/qcm-form" routerLinkActive="active">Recommence</a>
</nav>     
    
    `
  })



  export class QcmResultatComponent {
  updateQcm: any;

  constructor(private dataService: QCM) { }
  ngOnInit() {
    this.dataService.getQcm().subscribe(info => {
      this.updateQcm = info;
    })
  }
}
