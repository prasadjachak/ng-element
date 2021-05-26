import { Component } from '@angular/core';

@Component({
  selector: 'nel-demo-alert-icon',
  template: `
    <nel-alert [nelTitle]="'成功提示的文案'" [nelType]="'success'" [nelShowIcon]="true"></nel-alert>
    <nel-alert [nelTitle]="'消息提示的文案'" [nelType]="'info'" [nelShowIcon]="true"></nel-alert>
    <nel-alert [nelTitle]="'警告提示的文案'" [nelType]="'warning'" [nelShowIcon]="true"></nel-alert>
    <nel-alert [nelTitle]="'错误提示的文案'" [nelType]="'error'" [nelShowIcon]="true"></nel-alert>
  `,
  styles: [
    `
      nel-alert:first-child {
        margin: 0;
      }
      nel-alert {
        margin: 20px 0 0;
      }
    `
  ]
})

export class NelDemoAlertIconComponent { }
