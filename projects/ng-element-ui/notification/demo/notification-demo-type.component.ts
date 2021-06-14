import { Component } from '@angular/core';
import { NelNotificationService } from 'ng-element-ui/notification';

@Component({
  selector: 'nel-demo-notification-type',
  template: `
    <button nel-button [nelPlain]="true" (click)="open1()">成功</button>
    <button nel-button [nelPlain]="true" (click)="open2()">警告</button>
    <button nel-button [nelPlain]="true" (click)="open3()">消息</button>
    <button nel-button [nelPlain]="true" (click)="open4()">错误</button>
  `
})

export class NelDemoNotificationTypeComponent {
  constructor(
    private notificationS: NelNotificationService
  ) { }

  open1(): void {
    this.notificationS.success('成功', '这是一条成功的提示消息');
  }

  open2(): void {
    this.notificationS.warning('警告', '这是一条警告的提示消息');
  }

  open3(): void {
    this.notificationS.info('消息', '这是一条消息的提示消息');
  }

  open4(): void {
    this.notificationS.error('错误', '这是一条错误的提示消息');
  }
}