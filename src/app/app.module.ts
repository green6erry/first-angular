import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
<<<<<<< HEAD
import {MdButtonModule, MdCheckboxModule, MatSidenavModule} from '@angular/material';
=======
import {MdButtonModule, MdCheckboxModule, MatSidenavModule, MatSortModule, MatCardModule } from '@angular/material';
>>>>>>> master

import { AppComponent } from './app.component';
import { NgbdAlertCloseable } from './alert-closeable/alert-closeable';
import { NgbdCarouselBasic } from './carousel/carousel-basic';
import { KnowledgeNote } from './knowledge-note/knowledge-note';
import { BurgerIconComponent } from './burger-icon/burger-icon.component';
<<<<<<< HEAD
import { ToggleDirective } from './toggle.directive';
=======
import { Burger2Component } from './burger2/burger2';
import { AccordianModule } from './accordian-module/accordian-module';
import { NgbdModalBasic } from './modal-basic/modal-basic';
>>>>>>> master



@NgModule({
  declarations: [
    AppComponent,
    NgbdAlertCloseable,
    NgbdCarouselBasic,
    KnowledgeNote,
    BurgerIconComponent,
<<<<<<< HEAD
    ToggleDirective
=======
    Burger2Component,
    AccordianModule,
    NgbdModalBasic
>>>>>>> master
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    MdButtonModule, 
    MdCheckboxModule,
<<<<<<< HEAD
    MatSidenavModule
=======
    MatSidenavModule,
    MatCardModule
>>>>>>> master
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
