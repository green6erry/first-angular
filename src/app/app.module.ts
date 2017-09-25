import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';

import { AppComponent } from './app.component';
import { NgbdAlertCloseable } from './alert-closeable/alert-closeable';
import { NgbdCarouselBasic } from './carousel/carousel-basic';
import { KnowledgeNote } from './knowledge-note/knowledge-note';


@NgModule({
  declarations: [
    AppComponent,
    NgbdAlertCloseable,
    NgbdCarouselBasic,
    KnowledgeNote
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    MdButtonModule, 
    MdCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
