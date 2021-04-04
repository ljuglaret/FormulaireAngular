import { Component } from '@angular/core';

import { QCM } from '../qcm';

@Component({
  selector: 'app-qcm-form',
  templateUrl: './qcm-form.component.html',
  styleUrls: ['./qcm-form.component.css']
})
export class qcmFormComponent {

  qcminitial = [{repFournie:null, repCorrecte:1},
                {repFournie:null, repCorrecte:1}
              ]

  model =  new QCM(this.qcminitial);

  submitted = false;

  onSubmit() { this.submitted = true; }

  newqcm() {
    this.model =  new QCM(this.qcminitial);
  }

}
