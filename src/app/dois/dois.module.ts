import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoisPageRoutingModule } from './dois-routing.module';

import { DoisPage } from './dois.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoisPageRoutingModule
  ],
  declarations: [DoisPage]
})
export class DoisPageModule {}
