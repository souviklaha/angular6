import { Injectable } from '@angular/core';
// import the Actor model
import { Actor } from '../models/Actor';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  private actorList: Actor[];
  constructor() { 
    this.actorList = [
      { name:'Amitabh', city:'Mumbai'},
      { name : 'Kamal Hasan', city:'Chennai'},
      { name : 'Nandita Das', city: 'Kolkata'},
      { name : 'Madhuri Dixit', city: 'Mumbai'}
    ];
  }

  addActor(actor:Actor){
    this.actorList.push(actor);
  }

  deleteActor(index:number){
    this.actorList.splice(index,1);
  }

  getActorList(){
    return this.actorList;
  }

  updateActor(index:number, actor:Actor){
    console.log(actor);
    this.actorList.splice(index, 1, actor);
    
  }
}
