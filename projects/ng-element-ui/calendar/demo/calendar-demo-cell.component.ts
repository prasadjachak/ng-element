import { Component } from '@angular/core';

@Component({
  selector: 'nel-demo-calendar-cell',
  template: `
    <nel-calendar [(ngModel)]="value">
      <p *nelDateCell="let date" [class.is-selected]="date.isSelected">
        {{ date.day.split('-').slice(1).join('-') }}{{ date.isSelected ? '✔️' : '' }}
      </p>
    </nel-calendar>
  `,
  styles: [
    `
      .is-selected {
        color: #1989fa;
      }
    `
  ]
})

export class NelDemoCalendarCellComponent {
  value = new Date();
}
