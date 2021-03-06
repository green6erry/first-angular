import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule, MatSidenavModule, MatSortModule, MatCardModule } from '@angular/material';

import { AppComponent } from './app.component';
import { NgbdAlertCloseable } from './alert-closeable/alert-closeable';
import { NgbdCarouselBasic } from './carousel/carousel-basic';
import { KnowledgeNote } from './knowledge-note/knowledge-note';
import { BurgerIconComponent } from './burger-icon/burger-icon.component';
import { Burger2Component } from './burger2/burger2';
import { AccordianModule } from './accordian-module/accordian-module';
import { NgbdModalBasic } from './modal-basic/modal-basic';



@NgModule({
  declarations: [
    AppComponent,
    NgbdAlertCloseable,
    NgbdCarouselBasic,
    KnowledgeNote,
    BurgerIconComponent,
    Burger2Component,
    AccordianModule,
    NgbdModalBasic
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    MdButtonModule, 
    MdCheckboxModule,
    MatSidenavModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
