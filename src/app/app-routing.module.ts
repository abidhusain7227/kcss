import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MiddleSectionComponent } from './partials/middle-section/middle-section.component';
import { AboutUsComponent } from './page/about-us/about-us.component';
import { PrivacyPolicyComponent } from './page/privacy-policy/privacy-policy.component';
import { TechTeamComponent } from './page/tech-team/tech-team.component';
import { CareerComponent } from './page/career/career.component';
import { ServicesComponent } from './page/services/services.component';
import { BlogComponent } from './page/blog/blog.component';
import { ContactUsComponent } from './page/contact-us/contact-us.component';

const routes: Routes = [
  {
    path:'',
    component:MiddleSectionComponent
  },
  {
    path:'about_us',
    component:AboutUsComponent
  },
  {
    path:'privacy_policy',
    component:PrivacyPolicyComponent
  },
  {
    path:'tech_team',
    component:TechTeamComponent
  },
  {
    path:'career',
    component:CareerComponent
  },
  {
    path:'services',
    component:ServicesComponent
  },
  {
    path:'blog',
    component:BlogComponent
  },
  {
    path:'contact_us',
    component:ContactUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
