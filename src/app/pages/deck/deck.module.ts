import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeckComponent } from './deck.component';
import { DeckDetailsComponent } from './deck-details/deck-details.component';
import { DeckRoutingModule } from './deck-routing.module';



@NgModule({
  declarations: [DeckComponent, DeckDetailsComponent],
  imports: [
    CommonModule,
    DeckRoutingModule
  ]
})
export class DeckModule { }
