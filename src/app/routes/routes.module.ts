import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutesRoutingModule } from './routes-routing.module';
import { LayoutModule } from '../layout/layout.module';
import { UsersModule } from './users/users.module';
import { ProfileModule } from './profile/profile.module';
import { SHARED_ZORRO_MODULES } from '../shared/shared-zorro.module';
import { AuthenticationPageComponent } from './authentication-page/authentication-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [


    AuthenticationPageComponent
  ],
  imports: [
    CommonModule,
    RoutesRoutingModule,
    LayoutModule,
    UsersModule,
    ProfileModule,
    FormsModule,
    ReactiveFormsModule,
    ...SHARED_ZORRO_MODULES,
  ]
})
export class RoutesModule { }
