import { Component, OnInit } from '@angular/core';
import { ActorService } from '../../services/actor.service';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../../node_modules/font-awesome/css/font-awesome.min.css';

import { Actor } from '../../models/Actor';

@Component({
  selector: 'app-actorlist',
  templateUrl: './actorlist.component.html',
  styleUrls: [
    './actorlist.component.css',
    '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css',
    '../../../../node_modules/font-awesome/css/font-awesome.min.css'
  ]
})
export class ActorlistComponent implements OnInit {

  actors: Actor[];
  row: number;
  tempActor: Actor;
  constructor(private actorService: ActorService) { }

  ngOnInit() {
    this.actors = this.actorService.getActorList();
    this.row = -1;
  }

  deleteActor(index){
    this.actorService.deleteActor(index);
    this.row = -1;
  }

  editActor(index){
    this.row=index;
    this.tempActor = Object.assign({},this.actors[index]);
  }

  cancel(){
    this.row = -1;
  }

  updateActor(index){
    this.actorService.updateActor(index,this.tempActor);
    this.row = -1;
  }
}
