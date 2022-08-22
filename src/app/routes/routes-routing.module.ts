import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from '../layout/header/header.component';
import { AuthenticationPageComponent } from './authentication-page/authentication-page.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/account',
    pathMatch:'full'
  },
  {
    path:'account',
    component:AuthenticationPageComponent,
  },
  {
    path:'users',
    component:HeaderComponent,
    children:[
      {
        path:'',
        loadChildren: () => import('./users/users.module').then(m => m.UsersModule),
      },
      {
        path:'profile',
        loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule),
      },
      {
        path:'**',
        redirectTo:'',
        pathMatch:'full',
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
