import { Component , Input, Output, EventEmitter} from '@angular/core';
import { QCM , qr} from '../qcm';
import data from '../donnees/qcm.json';



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
            <h2 >{{this.qcminitial[in].intituleQuestion}}</h2>
            
            <label for="choix1Q{{in}}">{{this.qcminitial[in].choix[0]}}</label>
            <input type="radio" id="choix1Q{{in}}" name="question{{in}}" value=0 [(ngModel)]="this.qcminitial[in].repFournie">
            
            <label for="choix2">{{this.qcminitial[in].choix[1]}}</label>
            <input type="radio" id="choix1Q{{in}}" name="question{{in}}" value= 1 [(ngModel)]="this.qcminitial[in].repFournie"/>
            
            <label for="choix3">{{this.qcminitial[in].choix[2]}}</label>
            <input type="radio" id="choix1Q{{in}}" name="question{{in}}" value= 2 [(ngModel)]="this.qcminitial[in].repFournie"/>
            
            <label for="choix4">{{this.qcminitial[in].choix[3]}}</label>
            <input type="radio" id="choix1Q{{in}}" name="question{{in}}" value= 3 [(ngModel)]="this.qcminitial[in].repFournie"/>

        </div>
  </div>
  <nav>
  <a (click)="submitBtn()" routerLink="/qcm-resultat" routerLinkActive="active">Correction</a>
</nav>   
   `
})



export class qcmFormComponent {
  //qcminitial : qr[] ;

  constructor(private dataService: QCM) {  
  } qcminitial :qr[] = [data[0],data[0]];
  /*qcminitial : qr [] = 
    [
      {intituleQuestion: "q1", numQuestion: 0, repFournie:null, repCorrecte:0, choix:["q1c1", "q1c2"]},
      {intituleQuestion: "q2",numQuestion:1,repFournie:null, repCorrecte:1,choix:["q2c1", "q2c2"]}
    ]*/

  
  model =  new QCM();

  submitted = false;

  
  onSubmit() { this.submitted = true; 
  
  }

  newqcm() {
    this.model =  new QCM();
  }

  listeAEnvoyer(): qr[]{
    var l: qr[] = []; 
    for (let i =  0 ; i < 2 ; i++){
      l[i] = {
        intituleQuestion:this.qcminitial[i].intituleQuestion,
        numQuestion: i, repFournie: this.qcminitial[i].repFournie,
        repCorrecte:this.qcminitial[i].repCorrecte,choix:this.qcminitial[i].choix
      }
    }
    return l;
  }

  submitBtn() {
    this.dataService.setQcm({
    listeQuestionsReponses : this.listeAEnvoyer()
    }
  
    );
  }
  


}
