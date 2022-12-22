import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent {
  items!: MenuItem[];

  ngOnInit(): void {
      this.items = [{
        label:'Pipes de Angular',
        icon: 'pi pi-desktop',
        items:[{
          label: 'Textos y Fechas',
          icon: 'pi pi-align-left',
          routerLink: '/'
        },
        {
          label: 'Números',
          icon: 'pi pi-dollar',
          routerLink: 'numbers'
        },
        {
          label: 'Especiales',
          icon: 'pi pi-globe',
          routerLink: 'wear'
        },
        {
          label: 'Números',
          icon: 'pi pi-dollar',
          routerLink: 'numbers'
        }]
      },
    {
      
        label: 'Pipes Personalizados',
        icon: 'pi pi-cog',
       
      
    }];
  }
}

