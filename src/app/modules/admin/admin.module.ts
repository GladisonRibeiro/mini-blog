import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';
import { PublishComponent } from './publish/publish.component';

import { AuthGuard } from './../../guards/auth.guard';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [LoginComponent, PublishComponent],
  providers: [
    AuthGuard
  ]
})
export class AdminModule { }
