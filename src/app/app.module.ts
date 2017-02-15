import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { CounterFormComponent } from './counter-form/counter-form.component';
import { CounterFormControlComponent } from './counter-form-control/counter-form-control.component';

@NgModule({
  declarations: [
    AppComponent, CounterComponent, CounterFormComponent, CounterFormControlComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
