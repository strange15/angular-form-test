import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ReactiveFormsAutoCompleteSearchingComponent } from './reactive-forms-auto-complete-searching/reactive-forms-auto-complete-searching.component';
import { BooleanInZhTwPipe } from './boolean-in-zh-tw.pipe';
import { GoogleMapLinkPipe } from './google-map-link.pipe';
import { LocationStringPipe } from './location-string.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormsAutoCompleteSearchingComponent,
    BooleanInZhTwPipe,
    GoogleMapLinkPipe,
    LocationStringPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
