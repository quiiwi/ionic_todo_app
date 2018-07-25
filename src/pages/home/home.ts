import {Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import {Task} from "../../models/task";
import {TasksProvider} from "../../providers/tasks/tasks";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  constructor(public navCtrl: NavController, public tasksProvider: TasksProvider) {

  }

  /** Création d'une tâche @type {task} */
  task: Task = new Task(); /** task même données que Task et on crée une nouvelle Task() */

  /** Affichage du Champ input @type {boolean}*/
  active: boolean = true;

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

  /**  déclanche l'enregistrement d'une nouvelle tâche.*/
  saveTask() {

    if (undefined !== this.task.title) {

      /** Attribution d'un ID */
      this.task.id = Date.now();

      /** On ajoute la tâche dans le tableau */
      this.tasks.push(this.task);

      /** Je sauvegarde en mémoire*/
      this.tasksProvider.save(this.tasks);

    }

    /** On réinitialise les données */
    this.task = new Task();
    this.active = false;
    setTimeout(() => this.active = true, 0);




  }
  /**
   * Quand l'utilisateur appuie sur entrée, on déclenche l'enregistrement.
   * */
  checkKey(key: any) {
    if(key === "Enter"){
      this.saveTask();
      console.log(Task);
    }
  }

  ngOnInit(): void {
    /**
     * Au chargement de mon application, je récupère les données en mémoire.
     * */
    this.tasksProvider.get().then(
      tasks =>{
        if(null !== tasks){
          this.tasks = tasks;
        }
      }
    )
  }
}
