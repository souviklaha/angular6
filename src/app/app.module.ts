import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ActorlistComponent } from './components/actorlist/actorlist.component';

//service imports
import { ActorService } from './services/actor.service';
import { PipedemoComponent } from './components/pipedemo/pipedemo.component';
import { PiglatinPipe } from './pipes/piglatin.pipe';
import { ReverseMessagePipe } from './pipes/reverse-message.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ActorlistComponent,
    PipedemoComponent,
    PiglatinPipe,
    ReverseMessagePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    ActorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
