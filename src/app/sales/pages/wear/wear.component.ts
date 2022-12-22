import { Component } from '@angular/core';
import { interval } from 'rxjs';


@Component({
  selector: 'app-wear',
  templateUrl: './wear.component.html',
  styleUrls: ['./wear.component.css']
})
export class WearComponent {

  name: string = 'Cinta';
  genre: string = 'femenino';

  //i18nSelect
  obj = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }
  //i18nPlural

  clients: string[] = ['Maria', 'Pedro', 'Juan', 'Raul']

  clientsMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  changeName(){
    this.name = 'Ricardo';
    this.genre = 'masculino'
  }

  deleteClient(){
    this.clients.splice(0,1)
    
  }

  //Keyvalue Pipe

  person= {
    name: 'Cinta',
    age:29,
    location: 'Canada'

  }

  //Async Pipe

  myObservable = interval(1000);

  valuePromise = new Promise((res, rej)=>{
    setTimeout(()=> {
      res('Fin de la promesa')
    }, 3500)
  })

 
}
