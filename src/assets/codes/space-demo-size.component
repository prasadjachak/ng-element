import { Component } from '@angular/core';

@Component({
    selector: 'nel-demo-space-size',
    template: `
    <nel-space [nelDirection]="'vertical'" [nelAlignment]="'start'" [nelSize]="30">
      <div *nelSpaceItem>
        <nel-radio-group [(ngModel)]="size">
          <label nel-radio [nelValue]="'mini'">迷你</label>
          <label nel-radio [nelValue]="'small'">小</label>
          <label nel-radio [nelValue]="'medium'">中等</label>
          <label nel-radio [nelValue]="'large'">大号</label>
        </nel-radio-group>
      </div>
    
      <nel-space *nelSpaceItem nelWrap [nelSize]="size">
        @for (i of list; track i) {
          <nel-card *nelSpaceItem class="box-card" style="width: 250px" [nelHeader]="header">
            <ng-template #header>
              <div class="card-header">
                <span>Card name</span>
                <button nel-button class="button" [nelType]="'text'">Operation button</button>
              </div>
            </ng-template>
            @for (o of list; track o) {
              <div class="text item">
                {{ 'List item ' + o }}
              </div>
            }
          </nel-card>
        }
      </nel-space>
    </nel-space>
    `,
    styles: [
        `
      .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    `
    ],
    standalone: false
})

export class NelDemoSpaceSizeComponent {
  list = [1, 2, 3];
  size = 'small';

  changeSize(val: string): void {
    this.size = val;
  }
}
