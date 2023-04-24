import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MiddleSectionComponent } from './middle-section/middle-section.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MiddleSectionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ 
    HeaderComponent,
    FooterComponent,
    MiddleSectionComponent
   ]
})
export class PartialsModule { }
