import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { DateRangePickerModule } from '@syncfusion/ej2-angular-calendars';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateWigetComponent } from './create-wiget/create-wiget.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateWigetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DateRangePickerModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
