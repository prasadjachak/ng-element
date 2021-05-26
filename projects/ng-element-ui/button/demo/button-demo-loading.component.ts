import { Component } from '@angular/core';

@Component({
  selector: 'nel-demo-button-loading',
  template: `
  <button nel-button [nelType]="'primary'" [nelLoading]="true">
    <span>加载中</span>
  </button>
  `
})

export class NelDemoButtonLoadingComponent { }
