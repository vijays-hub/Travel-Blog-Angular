import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatesComponent } from './states/states.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { HampiComponent } from './hampi/hampi.component';
import { CoorgComponent } from './coorg/coorg.component';
import { MangaloreComponent } from './mangalore/mangalore.component';
import { MalnaduComponent } from './malnadu/malnadu.component';
import { KarnatakaComponent } from './karnataka/karnataka.component';
import { Error404PageNotFoundComponent } from './error404-page-not-found/error404-page-not-found.component';
import { AdsComponent } from './ads/ads.component';
import { StatesListComponent } from './states-list/states-list.component';
import { MysoreComponent } from './mysore/mysore.component';
import { TamilnaduComponent } from './tamilnadu/tamilnadu.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OotyComponent } from './ooty/ooty.component';
import { MaduraiComponent } from './madurai/madurai.component';
import { ChidambaramComponent } from './chidambaram/chidambaram.component';
import { MahabalipuramComponent } from './mahabalipuram/mahabalipuram.component';
import { KodaikanalComponent } from './kodaikanal/kodaikanal.component';
import { KanyakumariComponent } from './kanyakumari/kanyakumari.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    StatesComponent,
    ContactUsComponent,
    AboutUsComponent,
    HomeComponent,
    HampiComponent,
    CoorgComponent,
    MangaloreComponent,
    MalnaduComponent,
    KarnatakaComponent,
    Error404PageNotFoundComponent,
    AdsComponent,
    StatesListComponent,
    MysoreComponent,
    TamilnaduComponent,
    NavbarComponent,
    OotyComponent,
    MaduraiComponent,
    ChidambaramComponent,
    MahabalipuramComponent,
    KodaikanalComponent,
    KanyakumariComponent,
    FooterComponent,  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent,FooterComponent]
})
export class AppModule { }
