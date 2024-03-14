// components
import { CardsListComponent } from "./components/cards-list/cards-list.component";
import { DeckCardComponent } from "./components/deck-card/deck-card.component";
import { DeckComponent } from "./deck.component";
import { DeckDetailsComponent } from "./deck-details/deck-details.component";
import { SearchFieldComponent } from "./components/search-field/search-field.component";

// package
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatDividerModule } from "@angular/material/divider";
import { MaterialModule } from "src/app/shared/material/material.module";
import { DeckRoutingModule } from "./deck-routing.module";
import { MatDrawer } from "@angular/material";

@NgModule({
  declarations: [
    CardsListComponent,
    DeckComponent,
    DeckDetailsComponent,
    DeckCardComponent,
    SearchFieldComponent,
  ],
  imports: [CommonModule, DeckRoutingModule, MaterialModule],
  exports: [CardsListComponent, DeckCardComponent, MatDividerModule, MatDrawer],
})
export class DeckModule {}
