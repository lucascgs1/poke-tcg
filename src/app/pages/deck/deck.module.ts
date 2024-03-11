import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DeckComponent } from "./deck.component";
import { DeckDetailsComponent } from "./deck-details/deck-details.component";
import { DeckRoutingModule } from "./deck-routing.module";
import { MaterialModule } from "src/app/shared/material/material.module";
import { DeckCardComponent } from "./components/deck-card/deck-card.component";

@NgModule({
  declarations: [DeckComponent, DeckDetailsComponent, DeckCardComponent],
  imports: [CommonModule, DeckRoutingModule, MaterialModule],
  exports: [DeckCardComponent],
})
export class DeckModule {}
