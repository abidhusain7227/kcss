import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MiddleSectionComponent } from './middle-section/middle-section.component';
import { AppRoutingModule } from '../app-routing.module';
import { NgImageSliderModule } from 'ng-image-slider';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MiddleSectionComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    NgImageSliderModule
  ],
  exports: [ 
    HeaderComponent,
    FooterComponent,
    MiddleSectionComponent,
   ]
})
export class PartialsModule { }
