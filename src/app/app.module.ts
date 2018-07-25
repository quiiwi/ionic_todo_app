import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {FormsModule} from "@angular/forms";
import { TasksProvider } from '../providers/tasks/tasks';
import {IonicStorageModule} from "@ionic/storage";
import {PipesModule} from "../pipes/pipes.module";

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FormsModule, /** permet d'avoir/importer le ngModel et de pouvoir l'utiliser. */
    IonicStorageModule.forRoot(),
    PipesModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TasksProvider
  ]
})
export class AppModule {}
