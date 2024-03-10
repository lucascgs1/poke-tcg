import { Router, RouterModule, Routes } from "@angular/router";
import { DeckComponent } from "./deck.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
  {
    path: '',
    component: DeckComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DeckRoutingModule { }
