import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';


export type qr = {numQuestion: number,intituleQuestion:string,repFournie:number; repCorrecte:number,choix:string[]};

@Injectable()
export class QCM {
  constructor(
  ) {  }

  private newQcm = new BehaviorSubject<any>(
    {
      listeQuestionsReponses:[]
    }

  );
  private qcmCommence =  new BehaviorSubject<any>(false);


  setQcm(qcm: any) {
    this.newQcm.next(qcm);
  }

  getQcm() {
    return this.newQcm.asObservable();
  }
}
