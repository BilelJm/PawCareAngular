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
import { ShopComponent } from "./views/shop/shop/shop.component";
import { CartComponent } from "./views/shop/cart/cart.component";
import { OrderComponent } from "./views/shop/order/order.component";
import { PaymentComponent } from "./views/shop/payment/payment.component";
import { ListAccessoriesComponent } from "./views/admin/shop-back/list-accessories/list-accessories.component";
import { AddAccessoryComponent } from "./views/admin/shop-back/add-accessory/add-accessory.component";
import { UpdateAccessoryComponent } from "./views/admin/shop-back/update-accessory/update-accessory.component";
import { OrderChartComponent } from "./views/admin/shop-back/order-chart/order-chart.component";

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
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
      //shop backend views 
{ path: "listAccessory", component:ListAccessoriesComponent },
{ path: "addAccessory", component:AddAccessoryComponent },
{ path: "updateAccessory/:idAccessory", component:UpdateAccessoryComponent },
{path :"chartOrders",component:OrderChartComponent}

    ],
  },

  //shop views
{path: "shop", component: ShopComponent},
{path: "Cart", component: CartComponent},
{path: "order-details", component: OrderComponent},
{path: "payment/:orderId", component: PaymentComponent},



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
  { path: "", component: IndexComponent },
  { path: "**", redirectTo: "", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
