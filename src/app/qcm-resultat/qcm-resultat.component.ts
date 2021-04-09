
import { Component } from '@angular/core';
import { QCM } from '../qcm';
import {qcmFormComponent} from '../qcm-form/qcm-form.component';
  @Component({ 
    selector : "resultat",
    providers:[qcmFormComponent],
    styleUrls:['qcm-resultat.component.css'],
    template : `
     <h1 [ngStyle] = "{'text-align' : 'center'}">Correction</h1>
      <div ngClass="box" *ngFor="let liste of this.updateQcm.listeQuestionsReponses ; let in=index">
  
        
          <div><h2> {{updateQcm.listeQuestionsReponses[in].intituleQuestion}} </h2></div>
          
           
          <div>
            <h2
              [ngStyle] = "{'background-color' : 
                              updateQcm.listeQuestionsReponses[in].repFournie == updateQcm.listeQuestionsReponses[in].repCorrecte
                              ? 'green' : 'red' 
                      }" 
            >  
            {{ updateQcm.listeQuestionsReponses[in].choix[
                updateQcm.listeQuestionsReponses[in].repFournie
              ]}}
          
          </h2></div>
  
          <div>
            <h2
              [ngStyle] = "{'visibility' : 
                              updateQcm.listeQuestionsReponses[in].repFournie == updateQcm.listeQuestionsReponses[in].repCorrecte
                              ? 'hidden' : 'visible' 
                      }" 
            >  
            {{ updateQcm.listeQuestionsReponses[in].choix[
                updateQcm.listeQuestionsReponses[in].repCorrecte
              ]}}
          
          </h2></div>
          
        
        
        </div>
      <br>
      <nav>
  <a routerLink="/qcm-form" routerLinkActive="active">Recommencer</a>
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
