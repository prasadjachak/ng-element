import { Component } from '@angular/core';

@Component({
    selector: 'nel-demo-space-basic',
    template: `
    <nel-space nelWrap>
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

export class NelDemoSpaceBasicComponent {
  list = [1, 2, 3];
}
