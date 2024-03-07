import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'

import { CoreModule } from 'src/app/core/core.module'

import { LayoutModule } from 'src/app/shared/modules/layout/layout.module'

import { HomeRoutingModule } from 'src/app/modules/home/home-routing.module'
import {
  HomeContactsComponent,
  HomeHeroComponent,
  HomeModalComponent,
  HomePresentationComponent,
  HomeStageComponent,
  HomeStagesComponent,
  HomeSubscriptionComponent,
} from 'src/app/modules/home/pages/home/components'
import { HomeComponent } from 'src/app/modules/home/pages/home/home.component'

@NgModule({
  declarations: [
    HomeComponent,
    HomeHeroComponent,
    HomeStagesComponent,
    HomeStageComponent,
    HomePresentationComponent,
    HomeContactsComponent,
    HomeSubscriptionComponent,
    HomeModalComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, CoreModule, LayoutModule, ReactiveFormsModule],
})
export class HomeModule {}
