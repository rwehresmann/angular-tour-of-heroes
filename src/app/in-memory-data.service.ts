import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let heroes = [
      {id: 11, name: 'Tracer'},
      {id: 12, name: 'Mercy'},
      {id: 13, name: 'Torbjörn'},
      {id: 14, name: 'Reinhardt'},
      {id: 15, name: 'Soldier 76'},
      {id: 16, name: 'Orisa'},
      {id: 17, name: 'Bastion'}
    ];
    return {heroes};
  }
}
