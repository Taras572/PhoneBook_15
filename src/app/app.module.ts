import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Lesson15Component } from './lesson15/lesson15.component';
import { InformPipe } from './lesson15/inform.pipe';

@NgModule({
  declarations: [
    AppComponent,
    Lesson15Component,
    InformPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
