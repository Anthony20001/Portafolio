import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavegationComponent } from './components/navegation/navegation.component';
import { BiographyComponent } from './components/biography/biography.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { DesignsComponent } from './components/designs/designs.component';
import { CapabilitiesComponent } from './components/capabilities/capabilities.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegationComponent,
    BiographyComponent,
    SkillsComponent,
    ProjectsComponent,
    DesignsComponent,
    CapabilitiesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
