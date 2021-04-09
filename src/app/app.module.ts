import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { qcmFormComponent } from './qcm-form/qcm-form.component';
import {QcmResultatComponent} from './qcm-resultat/qcm-resultat.component';
import { QCM } from './qcm';


const appRoutes: Routes = [
  { path: 'qcm-resultat', component: QcmResultatComponent },
  { path: 'qcm-form', component: qcmFormComponent }
];
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { /*enableTracing: true ,*/
      useHash:true
      } 
      
    )
  ],
  declarations: [
    AppComponent,
    qcmFormComponent,
    QcmResultatComponent
  ],
  providers: [QCM],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
