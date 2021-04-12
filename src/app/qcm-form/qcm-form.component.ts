import { Component , Input, Output, EventEmitter} from '@angular/core';
import { QCM , qr} from '../qcm';
import data from '../donnees/qcm.json';


@Component({
  selector: 'app-qcm-form',
  styleUrls: ['./qcm-form.component.css'],

  template: `
  <div class="container">
  <div [hidden]="submitted">
  <form (ngSubmit)="onSubmit()" #qcmForm="ngForm">
  <div *ngFor="let liste of this.qcminitial; let in=index ; " >
        <div ngClass="box" class="form-group">        
          <div > 
            <img [src] = listeImages[this.qcminitial[in].numQuestion] />
          </div>
          <div >
            <h2 >{{this.qcminitial[in].intituleQuestion}}</h2>
            
            <div *ngFor="let listeRep of this.qcminitial[in].choix; let numChoix = index ; "><label for="choix{{numChoix}}Q{{in}}">{{this.qcminitial[in].choix[numChoix]}}</label>
            <input type="radio" id="choix1Q{{in}}" name="question{{in}}" value= {{numChoix}} [(ngModel)]="this.qcminitial[in].repFournie"></div>
              
          
          </div>
        </div>
    </div>
  <nav>
  <a (click)="submitBtn()" routerLink="/qcm-resultat" routerLinkActive="active">Correction</a>
</nav>   
   `
})


export class qcmFormComponent {
  constructor(private dataService: QCM) {  
  }
  
  qcmCommence = true;
  qcminitial = data;

/* [{1,a,true} , {2,d,false}] => [{2,d,false},{1,a,true} , {2,d,false}]* */
f () : qr[]{
  var liste: qr[] = [];
  var posAleatoires: number[] = [];
  var taille = this.qcminitial.length ;
  while(posAleatoires.length < taille){
    var posAleatoire =  Math.floor(Math.random() * this.qcminitial.length ) ;
    if(!posAleatoires.includes(posAleatoire)){
      posAleatoires.push(posAleatoire);
      liste.push(this.qcminitial[posAleatoire]);
      this.qcminitial[posAleatoire].repFournie = null;
    }
  }
  return liste;
}

  ngOnInit() {
    this.qcminitial = this.f();


  }

  model =  new QCM();


  listeImages = [
    "assets/img/elephant.jpg",
   "assets/img/papillon.jpeg" ,
   "assets/img/edm.jpg" ,
   "assets/img/cerf.jpg" 
    ]
  submitted = false;
  onSubmit() { this.submitted = true; 
  
  }

  newqcm() {
    this.model =  new QCM();
  }




  listeAEnvoyer(): qr[]{
    var l: qr[] = []; 
    for (let i =  0 ; i < data.length ; i++){
      l[i] = {
        intituleQuestion:this.qcminitial[i].intituleQuestion,
        numQuestion: this.qcminitial[i].numQuestion,
        repFournie: this.qcminitial[i].repFournie,
        repCorrecte:this.qcminitial[i].repCorrecte,
        choix:this.qcminitial[i].choix
      }
    }
    return l;
  }

  submitBtn() {
    this.dataService.setQcm({
      listeQuestionsReponses : this.listeAEnvoyer()
    });
  }
}
