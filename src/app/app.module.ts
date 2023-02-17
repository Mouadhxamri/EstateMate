import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MenuComponent } from './menu/menu.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { VisitListComponent } from './visit-list/visit-list.component';
import { VisitComponent } from './visit/visit.component';
import {HttpClientModule} from "@angular/common/http";
import { CreateVisitComponent } from './create-visit/create-visit.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { UpdateVisitComponent } from './update-visit/update-visit.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { VisitDetailsComponent } from './visit-details/visit-details.component';
import {SearchPipe} from "./search.pipe";


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FavoriteComponent,
    VisitListComponent,
    VisitComponent,
    CreateVisitComponent,
    UpdateVisitComponent,
    NavBarComponent,
    SideBarComponent,
    VisitDetailsComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
