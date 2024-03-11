import { Router, RouterModule, Routes } from "@angular/router";
import { DeckComponent } from "./deck.component";
import { NgModule } from "@angular/core";
import { DeckDetailsComponent } from "./deck-details/deck-details.component";

const routes: Routes = [
  {
    path: "",
    component: DeckComponent,
  },

  {
    path: "new-deck",
    component: DeckDetailsComponent,
  },
  {
    path: "/:id",
    component: DeckDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeckRoutingModule {}
