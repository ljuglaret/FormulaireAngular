

import { Component, Injectable, Input, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { QCM } from '../qcm';
import {qcmFormComponent} from '../qcm-form/qcm-form.component';
  @Component({
    selector : "resultat",
    providers:[qcmFormComponent],
    template : `
    <h2>Vous avez envoyé</h2>
      <table *ngFor="let liste of this.param.qcminitial ; let in=index">
        <tr>
          <th> Question </th>
          <th> Votre reponse </th>
          <th> La reponse attendue </th>
        </tr>
        <tr>
          <td> <input value = "Question{{in +1 }}">                                             </td>
          <td> <input value = "{{ param.reps[in] }}">        </td>
          <td> <input value = "{{ param.qcminitial[in].repCorrecte }}">     </td>
        </tr>
        
        </table>
      <br>
      <nav>
  <a routerLink="/qcm-form" routerLinkActive="active">Recommence</a>
</nav>     
    
    `
  })

export class QcmResultatComponent {
 

  constructor(public param: qcmFormComponent){param.increment();};
  ngOnInit(): void {  
  }

}
