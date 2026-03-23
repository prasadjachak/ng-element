import { Component } from '@angular/core';
import { zoomMotion, zoomTopMotion, zoomBottomMotion } from 'ng-element-ui/core/animation';

@Component({
    selector: 'nel-demo-animation-zoom',
    template: `
    <div>
      <button nel-button (click)="show = !show">Click Me</button>
    
      <div style="display: flex; margin-top: 20px; height: 100px;">
        @if (show) {
          <div class="transition-box" @zoomMotion>zoomMotion</div>
        }
        @if (show) {
          <div class="transition-box" @zoomTopMotion>zoomTopMotion</div>
        }
        @if (show) {
          <div class="transition-box" @zoomBottomMotion>zoomBottomMotion</div>
        }
      </div>
    </div>
    `,
    styles: [
        `
      .transition-box {
        margin-bottom: 10px;
        width: 200px;
        height: 100px;
        border-radius: 4px;
        background-color: #409eff;
        text-align: center;
        color: #fff;
        padding: 40px 20px;
        margin-right: 20px;
        box-sizing: border-box;
      }
    `
    ],
    animations: [zoomMotion, zoomTopMotion, zoomBottomMotion],
    standalone: false
})

export class NelDemoAnimationZoomComponent {
  show = true;
}
