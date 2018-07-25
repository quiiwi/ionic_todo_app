import { Injectable } from '@angular/core';
import {Storage} from "@ionic/storage";
import {Task} from '../../models/task';

/*
  Generated class for the TasksProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TasksProvider {

  constructor(private storage: Storage) {
    console.log('Hello TasksProvider Provider');
  }
  save(tasks: Task[]): void{
    this.storage.set('tasks',tasks);
  }
  /**
   * Récupère les tâches en mémoire.
   * */
  get(): Promise<Task[]> {
    return this.storage.get('tasks');
  }


}
