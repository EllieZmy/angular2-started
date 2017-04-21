//组件里面使用的东西需要重新import
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { RouterModule } from '@angular/router';
import { MdSliderModule } from "@angular2-material/slider";
import { MdCoreModule,OVERLAY_PROVIDERS,MdUniqueSelectionDispatcher } from "@angular2-material/core";
import { MdButtonModule } from "@angular2-material/button";
import { MdCardModule } from "@angular2-material/card";
import { MdRadioModule } from "@angular2-material/radio";
import { MdCheckboxModule } from "@angular2-material/checkbox";
import { MdTooltipModule } from "@angular2-material/tooltip";
import 'hammerjs';

@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
    MdCardModule,
    MdCheckboxModule,
    MdCoreModule,
    MdRadioModule,
    MdSliderModule,
    MdTooltipModule,
    RouterModule.forChild([
      { path:'',component:AboutComponent }
    ])
  ],
  declarations: [AboutComponent]
})
export class AboutModule { }
