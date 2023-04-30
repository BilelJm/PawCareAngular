import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// layouts
import { AdminComponent } from "./layouts/admin/admin.component";
import { AuthComponent } from "./layouts/auth/auth.component";

// admin views
import { DashboardComponent } from "./views/admin/dashboard/dashboard.component";
import { MapsComponent } from "./views/admin/maps/maps.component";
import { SettingsComponent } from "./views/admin/settings/settings.component";
import { TablesComponent } from "./views/admin/tables/tables.component";

// auth views
import { LoginComponent } from "./views/auth/login/login.component";
import { RegisterComponent } from "./views/auth/register/register.component";

// no layouts views
import { IndexComponent } from "./views/index/index.component";
import { LandingComponent } from "./views/landing/landing.component";
import { ProfileComponent } from "./views/profile/profile.component";
import { PetListComponent } from "./views/admin/apt/back/pet/pet-list/pet-list.component";
import { PetAddComponent } from "./views/admin/apt/back/pet/pet-add/pet-add.component";
import { PetUpdateComponent } from "./views/admin/apt/back/pet/pet-update/pet-update.component";
import { AppointmentListComponent } from "./views/admin/apt/back/appointment/appointment-list/appointment-list.component";
import { AppointmentAddComponent } from "./views/admin/apt/back/appointment/appointment-add/appointment-add.component";
import { AppointmentUpdateComponent } from "./views/admin/apt/back/appointment/appointment-update/appointment-update.component";
import { CalendrierComponent } from "./views/apt/front/calendrier/calendrier.component";
import { ListPetsComponent } from "./views/apt/front/pet/list-pets/list-pets.component";
import { AddPetComponent } from "./views/apt/front/pet/add-pet/add-pet.component";
import { UpdatePetComponent } from "./views/apt/front/pet/update-pet/update-pet.component";

const routes: Routes = [
  // admin views
  {
    path: "admin",
    component: AdminComponent,
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "settings", component: SettingsComponent },
      { path: "tables", component: TablesComponent },
      { path: "maps", component: MapsComponent },

      //Appointment-Management

      { path: "appointment", component: AppointmentListComponent},
      { path: "add-appointment", component: AppointmentAddComponent},
      { path: "update-appointment/:id", component: AppointmentUpdateComponent},


      { path: "pet", component: PetListComponent},
      { path: "add-pet", component: PetAddComponent},
      {path:"update-pet/:id",component:PetUpdateComponent},

      { path: "", redirectTo: "dashboard", pathMatch: "full" },
    ],
  },
  // auth views
  {
    path: "auth",
    component: AuthComponent,
    children: [
      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent },
      { path: "", redirectTo: "login", pathMatch: "full" },
    ],
  },
  // no layout views
  { path: "profile", component: ProfileComponent },
  { path: "landing", component: LandingComponent },

  //calendrier
  { path: 'calendrier', component: CalendrierComponent },

  //petProfile
  { path: 'pet', component: ListPetsComponent },
  { path: 'pet/add', component: AddPetComponent },
  {path:"pet/update-pet/:id",component:UpdatePetComponent},

  


  { path: "", component: IndexComponent },
  { path: "**", redirectTo: "", pathMatch: "full" },

  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
