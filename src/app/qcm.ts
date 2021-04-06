import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';


type qr = {numQuestion: number,repFournie:number; repCorrecte:number,choix:string[]};

@Injectable()
export class QCM {
  constructor(
  ) {  }

  private newQcm = new BehaviorSubject<any>(
    {
      listeQuestionsReponses:[    ]
    }
  );

  setQcm(qcm: any) {
    this.newQcm.next(qcm);
  }

  getQcm() {
    return this.newQcm.asObservable();
  }
}
