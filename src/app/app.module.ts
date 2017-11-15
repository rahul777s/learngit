import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { RedColorDirective } from './red-color.directive';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: 'servers', component: ServersComponent },
  { path: 'home', component: HomeComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
    RedColorDirective,
    HomeComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(appRoutes), HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
