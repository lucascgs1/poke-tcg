import { Component, HostListener, OnInit } from "@angular/core";
import { CardRequest } from "src/app/core/model/cardsRequest.interface";
import {
  CardData, CardsResponse,
} from "src/app/core/model/cardsResponse.interface";
import { CardService } from "src/app/core/services/card.service";
import { getTestBed } from "@angular/core/testing";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-deck-details",
  templateUrl: "./deck-details.component.html",
  styleUrls: ["./deck-details.component.scss"],
})
export class DeckDetailsComponent implements OnInit {
  CardsPage?: CardsResponse = null;
  pokemonCardsList: CardData[] = [];
  currentPage: number = 1;
  cardRequest: CardRequest = {
    pageSize: 30,
  };
  deckForm: FormGroup;

  constructor(private cardService: CardService, private fb: FormBuilder) { }

  ngOnInit() {
    this.loadCards();
  }

  loadCards() {
    this.cardService.getCards(this.cardRequest).subscribe((res) => {
      if (this.cardRequest.page) {
        this.CardsPage.data.push(...res.data);
        this.CardsPage.page = res.page;
        this.CardsPage.pageSize = res.pageSize;
        this.CardsPage.totalCount = res.totalCount;
      } else {
        this.CardsPage = res;
      }
    });
  }

  updateCurrentDeck(event, card: CardData) {
    if (this.CardsPage.data) {
      if (this.pokemonCardsList.filter((e) => e.id === card.id).length > 0) {
        if (event == 0) {
          this.pokemonCardsList.filter((e) => e.id === card.id).pop();
        }

        this.pokemonCardsList.filter((e) => e.id === card.id)[0].amount = event;
        console.log(this.pokemonCardsList);
      }
      let newCard = this.CardsPage.data.filter((e) => e.id === card.id)[0]
      console.log(newCard)
      console.log(this.CardsPage.data)
      newCard.amount = event;
      this.pokemonCardsList.push(newCard)
      // // this.pokemonCardsList.filter(e => e.id === this.CardsPage.data.)
      // this.pokemonCardsList = this.CardsPage.data.filter((e) => e.amount > 0);
    }
  }

  searchOptions(event) {
    this.cardRequest.q = "";

    if (event.pokemonName) {
      this.cardRequest.q += `name:"${event.pokemonName}" `;
    }
    if (event.subType) {
      this.cardRequest.q += `subtypes:"${event.subType}" `;
    }
    if (event.superType) {
      this.cardRequest.q += `supertype:"${event.superType}" `;
    }
    if (event.rarities) {
      this.cardRequest.q += `rarity:"${event.rarities}" `;
    }
    this.cardRequest.page = null;
    this.loadCards();
  }

  nextPage() {
    this.cardRequest.page = this.cardRequest.page
      ? this.cardRequest.page + 1
      : 2;
    this.loadCards();
  }
}
