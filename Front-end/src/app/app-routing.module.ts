import { AboutComponent } from './about/about.component';
import { FoundationComponent } from './foundation/foundation.component';
import { GuideComponent } from './guide/guide.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'guide', component: GuideComponent},
  {path: 'foundation', component: FoundationComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
