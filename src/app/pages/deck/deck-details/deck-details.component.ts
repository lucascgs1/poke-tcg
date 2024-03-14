import { Component, OnInit } from "@angular/core";
import {
  CardData,
  CardsResponse,
} from "src/app/core/model/carsResponse.interface";
import { CardService } from "src/app/core/services/card.service";

@Component({
  selector: "app-deck-details",
  templateUrl: "./deck-details.component.html",
  styleUrls: ["./deck-details.component.scss"],
})
export class DeckDetailsComponent implements OnInit {
  CardsPage?: CardsResponse = null;
  pokemonCardsList: CardData[] = [];
  currentPage: number = 1;

  constructor(private cardService: CardService) {}

  ngOnInit() {
    this.cardService.getCards({}).subscribe((res) => {
      this.CardsPage = res;
      this.pokemonCardsList = res.data;
      console.log(res);
    });
  }
}
