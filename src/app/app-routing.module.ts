import { NgModule } from "@angular/core";

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
import { AdoptionListComponent } from "./views/admin/adop back/Adoption/adoption-list/adoption-list.component";
import { UpdateAdoptionComponent } from "./views/admin/adop back/Adoption/update-adoption/update-adoption.component";
import { CreateAdoptionComponent } from "./views/admin/adop back/Adoption/create-adoption/create-adoption.component";
import { TrainingListComponent } from "./views/admin/adop back/Training/training-list/training-list.component";
import { UpdateTrainingComponent } from "./views/admin/adop back/Training/update-training/update-training.component";
import { CreateTrainingComponent } from "./views/admin/adop back/Training/create-training/create-training.component";
import { TrainingListFrontComponent } from "./views/adop front/Training/training-list-front/training-list-front.component";
import { AdoptionListFrontComponent } from "./views/adop front/Adoption/adoption-list-front/adoption-list-front.component";
import { EmailFormComponent } from "./views/adop front/Adoption/email-form/email-form.component";
import { RouterModule, Routes } from "@angular/router";
import { ArticleListComponent } from "./views/admin/article/article-list/article-list.component";
import { ArticleCreateComponent } from "./views/admin/article/article-create/article-create.component";
import { ArticleUpdateComponent } from "./views/admin/article/article-update/article-update.component";
import { ArticleDetailsComponent } from "./views/admin/article/article-details/article-details.component";
import { CommentListComponent } from "./views/admin/comment/comment-list/comment-list.component";
import { HotelComponent } from "./views/admin/hotel-reservation/hotel/hotel.component";
import { CreateHotelComponent } from "./views/admin/hotel-reservation/hotel-add/create-hotel/create-hotel.component";
import { HotelUpdateComponent } from "./views/admin/hotel-reservation/hotel-update/hotel-update.component";
import { ResListComponent } from "./views/admin/hotel-reservation/res-list/res-list.component";

import { UpdateResComponent } from "./views/admin/hotel-reservation/update-res/update-res.component";
import { StatisticComponent } from "./views/admin/hotel-reservation/statistic/statistic.component";
import { ResCreateComponent } from "./views/admin/hotel-reservation/res-create/res-create.component";
import { HotelhomeComponent } from "./views/hotel-reservation/hotelhome/hotelhome.component";
import { HoteldetailsComponent } from "./views/hotel-reservation/hoteldetails/hoteldetails.component";
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

      //hotel back-office
      { path: "hotel-res",component: HotelComponent},
      { path: "hotel-add",component: CreateHotelComponent},
      { path: "hotel-update/:id",component: HotelUpdateComponent},
      { path: "res-list",component: ResListComponent},
      { path: "res-create", component: ResCreateComponent},
      { path: "res-update/:id", component: UpdateResComponent},
      { path: "statistics", component: StatisticComponent},


      //Appointment-Management

      { path: "appointment", component: AppointmentListComponent},
      { path: "add-appointment", component: AppointmentAddComponent},
      { path: "update-appointment/:id", component: AppointmentUpdateComponent},


      { path: "pet", component: PetListComponent},
      { path: "add-pet", component: PetAddComponent},
      {path:"update-pet/:id",component:PetUpdateComponent},

      //adoption-training
      { path: "adoption-list", component: AdoptionListComponent },
      {path: 'update-Adoption/:id', component: UpdateAdoptionComponent},
      {path: 'create-Adoption', component: CreateAdoptionComponent},

      { path: 'training-list',        component: TrainingListComponent },
      {path: 'update-Training/:id', component: UpdateTrainingComponent},
      {path: 'create-Training', component: CreateTrainingComponent},

            //Articles
            { path: 'article-list',        component: ArticleListComponent },
            { path: 'article-create',        component: ArticleCreateComponent },
            { path: 'article-update/:id',        component: ArticleUpdateComponent },
            { path: 'article-details/:id',        component: ArticleDetailsComponent },
            { path: 'comment-list',        component: CommentListComponent },

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
  { path:"reservations/:id", component: ReservationComponent},
  // no layout views
  { path: "profile", component: ProfileComponent },
  { path: "landing", component: LandingComponent },


  //calendrier
  { path: 'calendrier', component: CalendrierComponent },

  //petProfile
  { path: 'pet', component: ListPetsComponent },
  { path: 'pet/add', component: AddPetComponent },
  {path:"pet/update-pet/:id",component:UpdatePetComponent},

 //trainingadoption front
  { path: "training-list-front", component: TrainingListFrontComponent },
  { path: "adoption-list-front", component: AdoptionListFrontComponent },

  { path: "email-form", component: EmailFormComponent },

  


  { path: "", component: IndexComponent },
  { path: "**", redirectTo: "", pathMatch: "full" },

  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
