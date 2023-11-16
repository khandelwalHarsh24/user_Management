// src/app/app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AccountCreationComponent } from './account-creation/account-creation.component';

const routes: Routes = [
  { path: 'user-details', component: UserDetailsComponent },
  { path: 'account-creation', component: AccountCreationComponent },
  { path: '', redirectTo: '/user-details', pathMatch: 'full' }, // Redirect to user-details by default
  { path: '**', redirectTo: '/user-details' } // Redirect to user-details for any unknown route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
