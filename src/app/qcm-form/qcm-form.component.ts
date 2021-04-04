import { Component } from '@angular/core';

import { QCM } from '../qcm';

@Component({
  selector: 'app-qcm-form',
  templateUrl: './qcm-form.component.html',
  styleUrls: ['./qcm-form.component.css']
})
export class qcmFormComponent {

  model = new QCM({rep1:'',repC:''},'','');

  submitted = false;

  onSubmit() { this.submitted = true; }

  newqcm() {
    this.model = new QCM({rep1:'',repC:''}, '');
  }

}
