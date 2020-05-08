import { Component, Input } from '@angular/core';

@Component({
  selector: 'stack',
  styles: [`h1 { font-family: Lato; }`]
})
export class StackComponent  {
  @Input() nummer: string;
  @Input() anzahl: any[];
}
