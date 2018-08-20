import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InfoComponent} from './info/info.component';
import {ProfileComponent} from './profile/profile.component';
import {HomeComponent} from './home/home.component';
import {AppComponent} from '../app/app.component';

const routes: Routes = [
{ path: 'info', component: InfoComponent },
{ path: 'profile', component: ProfileComponent },
{path : '', component : HomeComponent},
{ path: 'home', component: HomeComponent }
];
@NgModule({
imports: [
RouterModule.forRoot(routes)
],
exports: [
RouterModule
],
declarations: []
})
export class AppRoutingModule { }
