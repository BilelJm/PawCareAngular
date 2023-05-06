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
import { HotelComponent } from "./views/admin/hotel-reservation/hotel/hotel.component";
import { CreateHotelComponent } from "./views/admin/hotel-reservation/hotel-add/create-hotel/create-hotel.component";

// auth views
import { LoginComponent } from "./views/auth/login/login.component";
import { RegisterComponent } from "./views/auth/register/register.component";

// no layouts views
import { IndexComponent } from "./views/index/index.component";
import { LandingComponent } from "./views/landing/landing.component";
import { ProfileComponent } from "./views/profile/profile.component";
import { HotelUpdateComponent } from "./views/admin/hotel-reservation/hotel-update/hotel-update.component";
import { ResListComponent } from "./views/admin/hotel-reservation/res-list/res-list.component";
import { CreateResComponent } from "./views/admin/hotel-reservation/create-res/create-res.component";
import { UpdateResComponent } from "./views/admin/hotel-reservation/update-res/update-res.component";
import { HotelhomeComponent } from "./views/hotel-reservation/hotelhome/hotelhome.component";
import { HoteldetailsComponent } from "./views/hotel-reservation/hoteldetails/hoteldetails.component";
import { Reservation } from "./views/admin/hotel-reservation/reservation";
import { ReservationComponent } from "./views/hotel-reservation/reservation/reservation.component";

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
      { path: "hotel-res",component: HotelComponent},
      { path: "hotel-add",component: CreateHotelComponent},
      { path: "hotel-update/:id",component: HotelUpdateComponent},
      { path: "res-list",component: ResListComponent},
      { path: "res-create", component: CreateResComponent},
      { path: "res-update/:id", component: UpdateResComponent},
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

  // hotels front
  { path:"hotels", component: HotelhomeComponent},
  { path:"hotels/detail/:id", component: HoteldetailsComponent},

  // reservations front
  { path:"reservations", component: ReservationComponent},
  // no layout views
  { path: "profile", component: ProfileComponent },
  { path: "landing", component: LandingComponent },
  { path: "", component: IndexComponent },
  { path: "**", redirectTo: "", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
