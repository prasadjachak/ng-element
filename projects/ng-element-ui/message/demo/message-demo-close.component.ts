import { Component } from '@angular/core';
import { NelMessageService } from 'ng-element-ui/message';

@Component({
  selector: 'nel-demo-message-close',
  template: `
    <button nel-button [nelPlain]="true" (click)="open1()">成功</button>
    <button nel-button [nelPlain]="true" (click)="open2()">警告</button>
    <button nel-button [nelPlain]="true" (click)="open3()">消息</button>
    <button nel-button [nelPlain]="true" (click)="open4()">错误</button>
  `
})

export class NelDemoMessageCloseComponent {
  constructor(
    private messageS: NelMessageService
  ) { }

  open1(): void {
    this.messageS.success('恭喜你，这是一条成功消息', {
      showClose: true
    });
  }

  open2(): void {
    this.messageS.warning('恭喜你，这是一条成功消息', {
      showClose: true
    });
  }

  open3(): void {
    this.messageS.info('恭喜你，这是一条成功消息', {
      showClose: true
    });
  }

  open4(): void {
    this.messageS.error('恭喜你，这是一条成功消息', {
      showClose: true,
      onClose: () => {
        console.log('onClose');
      }
    });
  }
}