import { NgModule } from '@angular/core';
import { NelIconModule } from 'ng-element-ui/icon';
import { DemoIconBasicComponent } from './icon-demo-basic.component';

@NgModule({
  declarations: [
    DemoIconBasicComponent
  ],
  exports: [
    DemoIconBasicComponent
  ],
  imports: [
    NelIconModule
  ]
})

export class NelDemoIconModule { }
