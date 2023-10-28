import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './cards/cards.component';
import { IconsComponent } from './icons/icons.component';

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent
  },
  {
    path: "profile",
    component: ProfileComponent
  },
  {
    path: "sign-in",
    component: SignInComponent
  },
  {
    path: "sign-up",
    component: SignUpComponent
  },
  {
    path: "users",
    component: UsersComponent
  },
  {
    path: "users/details",
    component: DetailsComponent
  },
  {
    path: "button",
    component: ButtonsComponent
  },
  {
    path: "cards",
    component: CardsComponent
  },
  {
    path: "icons",
    component: IconsComponent
  },
  // {
  //   path: "typography",
  //   component: TypographyComponent
  // },
  // {
  //   path: "charts",
  //   component: ChartsComponent
  // },
  // {
  //   path: "maps",
  //   component: MapsComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
