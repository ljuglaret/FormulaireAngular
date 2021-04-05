import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { qcmFormComponent } from './qcm-form/qcm-form.component';
import {QcmResultatComponent} from './qcm-resultat/qcm-resultat.component';

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
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  declarations: [
    AppComponent,
    qcmFormComponent,
    QcmResultatComponent
  ],
  providers: [qcmFormComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
