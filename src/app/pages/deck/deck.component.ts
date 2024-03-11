import { Component, OnInit } from "@angular/core";
import { CardService } from "../../core/services/card.service";
import { DeckService } from "src/app/core/services/deck.service";

@Component({
  selector: "app-deck",
  templateUrl: "./deck.component.html",
  styleUrls: ["./deck.component.scss"],
})
export class DeckComponent implements OnInit {
  deckList: any = [
    {
      name: "deck 1",
      id: 1,
      creationDate: new Date(),
      cardsQtd: 40,
      principalEnergy: "water",
    },
    {
      name: "deck 1",
      id: 1,
      creationDate: new Date(),
      cardsQtd: 40,
      principalEnergy: "Water",
    },
    {
      name: "deck 1",
      id: 1,
      creationDate: new Date(),
      cardsQtd: 40,
      principalEnergy: "Water",
    },
    {
      name: "deck 1",
      id: 1,
      creationDate: new Date(),
      cardsQtd: 40,
      principalEnergy: "Water",
    },
    {
      name: "deck 1",
      id: 1,
      creationDate: new Date(),
      cardsQtd: 40,
      principalEnergy: "Water",
    },
  ];

  constructor(
    private cardService: CardService,
    private deckService: DeckService
  ) {}

  ngOnInit() {
    this.cardService.getCards({}).subscribe((res) => {
      console.log(res);
    });
  }

  newDeck() {}
  editDeck(id: number) {
    console.log(id);
  }
  deleteDeck(id: number) {
    console.log(id);
  }
}
