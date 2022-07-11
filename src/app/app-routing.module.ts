import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './components/pages/settings/settings.component';
import { AboutComponent} from './components/pages/about/about.component';
import { ContactComponent} from './components/pages/contact/contact.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard/dashboard.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'settings', component:SettingsComponent,  canActivate: [AuthGuard] },
  {path:'home', redirectTo:'/', pathMatch:'full'},
  {path:'about', component:AboutComponent,  canActivate: [AuthGuard] },
  {path:'contact', component:ContactComponent,  canActivate: [AuthGuard] },
  {path:'dashboard', component:DashboardComponent,  canActivate: [AuthGuard] },
];
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }
