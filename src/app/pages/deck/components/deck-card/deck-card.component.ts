import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-deck-card",
  templateUrl: "./deck-card.component.html",
  styleUrls: ["./deck-card.component.scss"],
})
export class DeckCardComponent implements OnInit {
  @Input() deckInfo: any;

  constructor() {}

  ngOnInit() {}
}
