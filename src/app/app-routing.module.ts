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
import { ArticleListComponent } from "./views/admin/article/article-list/article-list.component";
import { ArticleCreateComponent } from "./views/admin/article/article-create/article-create.component";
import { ArticleUpdateComponent } from "./views/admin/article/article-update/article-update.component";
import { ArticleDetailsComponent } from "./views/admin/article/article-details/article-details.component";
import { CommentListComponent } from "./views/admin/comment/comment-list/comment-list.component";
import { ListArticleComponent } from "./views/article-front/list-article/list-article.component";
import { CreateArticleComponent } from "./views/article-front/create-article/create-article.component";
import { DetailsArticleComponent } from "./views/article-front/details-article/details-article.component";
import { AddCommentComponent } from "./views/article-front/add-comment/add-comment.component";


const routes: Routes = [

  { path: 'list-article', component: ListArticleComponent },
  {path: 'create-article', component: CreateArticleComponent},
  {path: 'details-article/:id', component:DetailsArticleComponent},
  {path: 'comment-add', component:AddCommentComponent},
  
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
      
      
      //Articles
      { path: 'article-list',        component: ArticleListComponent },
      { path: 'article-create',        component: ArticleCreateComponent },
      { path: 'article-update/:id',        component: ArticleUpdateComponent },
      { path: 'article-details/:id',        component: ArticleDetailsComponent },
      { path: 'comment-list',        component: CommentListComponent },
      

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
  { path: "", component: IndexComponent },
  { path: "**", redirectTo: "", pathMatch: "full" },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
