import { Component } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css']
})
export class BasicsComponent {

  nombreLower: string = 'cinta';
  nombreUpper: string = 'CINTA';
  nombreComplete: string = 'ciNtA MaRQuez';

  fecha: Date = new Date;

}
