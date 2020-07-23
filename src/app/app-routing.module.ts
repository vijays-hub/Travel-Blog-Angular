import { MahabalipuramComponent } from './mahabalipuram/mahabalipuram.component';
import { ChidambaramComponent } from './chidambaram/chidambaram.component';
import { KodaikanalComponent } from './kodaikanal/kodaikanal.component';
import { MangaloreComponent } from './mangalore/mangalore.component';
import { CoorgComponent } from './coorg/coorg.component';
import { MalnaduComponent } from './malnadu/malnadu.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { StatesComponent } from './states/states.component';
import { HomeComponent } from './home/home.component';
import { KarnatakaComponent } from './karnataka/karnataka.component';
import { Error404PageNotFoundComponent } from './error404-page-not-found/error404-page-not-found.component';
import { HampiComponent } from './hampi/hampi.component';
import { MysoreComponent } from './mysore/mysore.component';
import { TamilnaduComponent } from './tamilnadu/tamilnadu.component';
import { OotyComponent } from './ooty/ooty.component';
import { MaduraiComponent } from './madurai/madurai.component';
import { KanyakumariComponent } from './kanyakumari/kanyakumari.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'states', component: StatesComponent },
  // {
  //   path: 'states',

  //   children: [

  //     { path: '', component: StatesComponent },
  //     {
  //       path: 'karnataka',

  //       children: [{ path: '', component: KarnatakaComponent },
  //       { path: 'hampi', component: HampiComponent },
  //       { path: 'mysore', component: MysoreComponent }]
  //     },
  //     {
  //       path: 'tamilnadu',component:TamilnaduComponent

  //       // children: [{ path: '', component: KarnatakaComponent },
  //       // { path: 'hampi', component: HampiComponent },
  //       // { path: 'mysore', component: MysoreComponent }]
  //     }
      
  //   ]
  // },

  // Karnataka Components
  { path: 'states/karnataka', component: KarnatakaComponent },
  { path: 'states/karnataka/hampi', component: HampiComponent },
  { path: 'states/karnataka/mysore', component: MysoreComponent },
  { path: 'states/karnataka/malnad', component: MalnaduComponent },
  { path: 'states/karnataka/coorg', component: CoorgComponent },
  { path: 'states/karnataka/mangalore', component: MangaloreComponent },

  // Tamil Nadu Components
  {path: 'states/tamilnadu',component:TamilnaduComponent},
  {path: 'states/tamilnadu/ooty',component:OotyComponent},
  {path: 'states/tamilnadu/madurai',component:MaduraiComponent},
  {path: 'states/tamilnadu/kodaikanal',component:KodaikanalComponent},
  {path: 'states/tamilnadu/chidambaram',component:ChidambaramComponent},
  {path: 'states/tamilnadu/mahabalipuram',component:MahabalipuramComponent},
  {path: 'states/tamilnadu/Kanyakumari',component:KanyakumariComponent},


  {path:'**',component:Error404PageNotFoundComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
