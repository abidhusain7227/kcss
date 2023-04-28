import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PartialsModule } from './partials/partials.module';
import { AboutUsComponent } from './page/about-us/about-us.component';
import { PrivacyPolicyComponent } from './page/privacy-policy/privacy-policy.component';
import { TechTeamComponent } from './page/tech-team/tech-team.component';
import { CareerComponent } from './page/career/career.component';
import { ServicesComponent } from './page/services/services.component';
import { BlogComponent } from './page/blog/blog.component';
import { ContactUsComponent } from './page/contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    PrivacyPolicyComponent,
    TechTeamComponent,
    CareerComponent,
    ServicesComponent,
    BlogComponent,
    ContactUsComponent
  ],
  imports: [
    PartialsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
