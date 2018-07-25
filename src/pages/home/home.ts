import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Task} from "../../models/task";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  /** Création d'une tâche @type {task} */
  task: Task = new Task(); /** task même données que Task et on crée une nouvelle Task() */

  /** Liste des tâches @type {Task[]}  */
  tasks: Task[] = [ /** tasks même données que Task[], qui est égal au tableau ci-dessous */
    {
      id:1,
      title:'promener le chien',
      status:false
    },
    {
      id:2,
      title:'Arroser les plantes',
      status:true
    },
    {
      id:3,
      title:'mourrir',
      status:false
    },
    {
      id:4,
      title:'être en dépression',
      status:true
    }
  ];
}
