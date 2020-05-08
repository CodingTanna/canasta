import { Component, Input } from '@angular/core';

@Component({
  selector: 'stack',
  template: `<h1>Ich bin der Stack #{{nummer}}</h1><ol *ngFor="let s "></ol>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class StackComponent  {
  @Input() nummer: string;
  @Input() anzahl: any[];
}
