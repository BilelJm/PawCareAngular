import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

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

// components for views and layouts

import { AdminNavbarComponent } from "./components/navbars/admin-navbar/admin-navbar.component";
import { AuthNavbarComponent } from "./components/navbars/auth-navbar/auth-navbar.component";
import { CardBarChartComponent } from "./components/cards/card-bar-chart/card-bar-chart.component";
import { CardLineChartComponent } from "./components/cards/card-line-chart/card-line-chart.component";
import { CardPageVisitsComponent } from "./components/cards/card-page-visits/card-page-visits.component";
import { CardProfileComponent } from "./components/cards/card-profile/card-profile.component";
import { CardSettingsComponent } from "./components/cards/card-settings/card-settings.component";
import { CardSocialTrafficComponent } from "./components/cards/card-social-traffic/card-social-traffic.component";
import { CardStatsComponent } from "./components/cards/card-stats/card-stats.component";
import { CardTableComponent } from "./components/cards/card-table/card-table.component";
import { FooterAdminComponent } from "./components/footers/footer-admin/footer-admin.component";
import { FooterComponent } from "./components/footers/footer/footer.component";
import { FooterSmallComponent } from "./components/footers/footer-small/footer-small.component";
import { HeaderStatsComponent } from "./components/headers/header-stats/header-stats.component";
import { IndexNavbarComponent } from "./components/navbars/index-navbar/index-navbar.component";
import { MapExampleComponent } from "./components/maps/map-example/map-example.component";
import { IndexDropdownComponent } from "./components/dropdowns/index-dropdown/index-dropdown.component";
import { TableDropdownComponent } from "./components/dropdowns/table-dropdown/table-dropdown.component";
import { PagesDropdownComponent } from "./components/dropdowns/pages-dropdown/pages-dropdown.component";
import { NotificationDropdownComponent } from "./components/dropdowns/notification-dropdown/notification-dropdown.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { UserDropdownComponent } from "./components/dropdowns/user-dropdown/user-dropdown.component";
import { PetListComponent } from "./views/admin/apt/back/pet/pet-list/pet-list.component";
import { HttpClientModule } from "@angular/common/http";
import { PetAddComponent } from './views/admin/apt/back/pet/pet-add/pet-add.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PetUpdateComponent } from './views/admin/apt/back/pet/pet-update/pet-update.component';
import { AppointmentListComponent } from './views/admin/apt/back/appointment/appointment-list/appointment-list.component';
import { AppointmentAddComponent } from './views/admin/apt/back/appointment/appointment-add/appointment-add.component';
import { AppointmentUpdateComponent } from './views/admin/apt/back/appointment/appointment-update/appointment-update.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Calendar
import { ScheduleModule, RecurrenceEditorModule } from '@syncfusion/ej2-angular-schedule';
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService } from '@syncfusion/ej2-angular-schedule';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { DateTimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { registerLicense } from '@syncfusion/ej2-base';
import { CalendrierComponent } from "./views/apt/front/calendrier/calendrier.component";
import { AddPetComponent } from "./views/apt/front/pet/add-pet/add-pet.component";
import { ListPetsComponent } from "./views/apt/front/pet/list-pets/list-pets.component";
import { UpdatePetComponent } from "./views/apt/front/pet/update-pet/update-pet.component";

//External modules
import {NgxPaginationModule} from 'ngx-pagination';
import {Ng2OrderModule} from 'ng2-order-pipe';
import { ToastrModule } from 'ngx-toastr';
import { UserListComponent } from './views/admin/users/user-list/user-list.component';
import { EmailFormComponent } from "./views/adop front/Adoption/email-form/email-form.component";
import { AdoptionListFrontComponent } from "./views/adop front/Adoption/adoption-list-front/adoption-list-front.component";
import { TrainingListFrontComponent } from "./views/adop front/Training/training-list-front/training-list-front.component";
import { UpdateTrainingComponent } from "./views/admin/adop back/Training/update-training/update-training.component";
import { CreateTrainingComponent } from "./views/admin/adop back/Training/create-training/create-training.component";
import { TrainingListComponent } from "./views/admin/adop back/Training/training-list/training-list.component";
import { UpdateAdoptionComponent } from "./views/admin/adop back/Adoption/update-adoption/update-adoption.component";
import { CreateAdoptionComponent } from "./views/admin/adop back/Adoption/create-adoption/create-adoption.component";
import { AdoptionListComponent } from "./views/admin/adop back/Adoption/adoption-list/adoption-list.component";
import { TableDropdownTrainingComponent } from "./components/dropdowns/table-dropdown-training/table-dropdown-training";
import { TableDropdownAdoptionComponent } from "./components/dropdowns/table-dropdown-adoption/table-dropdown-adoption";
import { Router, RouterModule } from "@angular/router";

registerLicense('"Mgo+DSMBaFt+QHFqVkNrWU5FdUBAXWFKblJ0T2ZcdV15ZDU7a15RRnVfRlxgSH1Wd0VqUH5ccA==;Mgo+DSMBPh8sVXJ1S0d+X1RPc0BDXnxLflF1VWJbdVt1flZPcDwsT3RfQF5jTX9Qd0ZmWH9XeXZQRg==;ORg4AjUWIQA/Gnt2VFhhQlJBfVpdXGBWfFN0RnNYfVR1cV9FaUwxOX1dQl9gSXpSdURgXH5eeX1WTmA=;MTcxMzc5NkAzMjMxMmUzMTJlMzMzNW8wQlZ0cm9QcERrT3NTcFh6aXFyRDhRWDB1Rk8yL0tGTC9xVTBlWTF3TG89;MTcxMzc5N0AzMjMxMmUzMTJlMzMzNWJaL2xaQlRWZDNlM3N3c25uMzFxSGo3Y1BUaThoRDY2M1QxMFlCSWIwWTA9;NRAiBiAaIQQuGjN/V0d+XU9Hc1RHQmJKYVF2R2BJflx6cVBMY1VBJAtUQF1hSn5Xd0ZiWnpfcH1cT2lc;MTcxMzc5OUAzMjMxMmUzMTJlMzMzNVZsS2tXbEhZUmRScjVObEVRWGRmUXNheS84cWtTYlVabzRrSHEzRENtb0E9;MTcxMzgwMEAzMjMxMmUzMTJlMzMzNUVKRlowNG5lTE1jK2JrcEFzZW9DNDdJaTZYRSsxdkRsWmZUTjdOMFlhajg9;Mgo+DSMBMAY9C3t2VFhhQlJBfVpdXGBWfFN0RnNYfVR1cV9FaUwxOX1dQl9gSXpSdURgXH5fcHRTQmA=;MTcxMzgwMkAzMjMxMmUzMTJlMzMzNWd2Y0s5UExMVTR3bll1bWt3djhuTmF6Zk1KNWd5TmRjWmxBN0s0VytiYW89;MTcxMzgwM0AzMjMxMmUzMTJlMzMzNWJYYmJGVjY0MEhYMWY0cGhvQTJhdmhKOEpKY2lyT29jZFFMcE9YdTZaV1k9;MTcxMzgwNEAzMjMxMmUzMTJlMzMzNVZsS2tXbEhZUmRScjVObEVRWGRmUXNheS84cWtTYlVabzRrSHEzRENtb0E9');



@NgModule({
  declarations: [

    
    AppComponent,
    DashboardComponent,
    CardBarChartComponent,
    CardLineChartComponent,
    IndexDropdownComponent,
    PagesDropdownComponent,
    TableDropdownComponent,
    NotificationDropdownComponent,
    UserDropdownComponent,
    SidebarComponent,
    FooterComponent,
    FooterSmallComponent,
    FooterAdminComponent,
    CardPageVisitsComponent,
    CardProfileComponent,
    CardSettingsComponent,
    CardSocialTrafficComponent,
    CardStatsComponent,
    CardTableComponent,
    HeaderStatsComponent,
    MapExampleComponent,
    AuthNavbarComponent,
    AdminNavbarComponent,
    IndexNavbarComponent,
    AdminComponent,
    AuthComponent,
    MapsComponent,
    SettingsComponent,
    TablesComponent,
    LoginComponent,
    RegisterComponent,
    IndexComponent,
    LandingComponent,
    
    ProfileComponent,
    PetListComponent,
    PetAddComponent,
    PetUpdateComponent,
    AppointmentListComponent,
    AppointmentAddComponent,
    AppointmentUpdateComponent,
    CalendrierComponent,
    AddPetComponent,
    ListPetsComponent,
    UpdatePetComponent,
    UserListComponent,

    AdoptionListComponent,
    CreateAdoptionComponent,
    UpdateAdoptionComponent,

    TrainingListComponent,
    CreateTrainingComponent,
    UpdateTrainingComponent,

    TrainingListFrontComponent,

    AdoptionListFrontComponent,

    EmailFormComponent,

    TableDropdownTrainingComponent,
    TableDropdownAdoptionComponent
  ],
  
  imports: [BrowserModule, AppRoutingModule, ScheduleModule ,RecurrenceEditorModule,HttpClientModule,
  FormsModule, ReactiveFormsModule,
  DropDownListModule,
  DateTimePickerModule,
  BrowserAnimationsModule,
  NgxPaginationModule,
  Ng2OrderModule,
  ToastrModule.forRoot(),
  RouterModule,

],
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService],
  bootstrap: [AppComponent],
})
export class AppModule {}
