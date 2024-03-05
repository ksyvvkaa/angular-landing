import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { CoreModule } from 'src/app/core/core.module'

import { LayoutModule } from 'src/app/shared/modules/layout/layout.module'

import { HomeRoutingModule } from 'src/app/modules/home/home-routing.module'
import { HomeHeroComponent } from 'src/app/modules/home/pages/home/home-hero/home-hero.component'
import { HomePresentationComponent } from 'src/app/modules/home/pages/home/home-presentation/home-presentation.component'
import { HomeStageComponent } from 'src/app/modules/home/pages/home/home-stage/home-stage.component'
import { HomeStagesComponent } from 'src/app/modules/home/pages/home/home-stages/home-stages.component'
import { HomeComponent } from 'src/app/modules/home/pages/home/home.component'

@NgModule({
  declarations: [HomeComponent, HomeHeroComponent, HomeStagesComponent, HomeStageComponent, HomePresentationComponent],
  imports: [CommonModule, HomeRoutingModule, CoreModule, LayoutModule],
})
export class HomeModule {}
