import { Component, Input, OnInit } from "@angular/core";
import { CardData } from "src/app/core/model/carsResponse.interface";

@Component({
  selector: "app-cards-list",
  templateUrl: "./cards-list.component.html",
  styleUrls: ["./cards-list.component.scss"],
})
export class CardsListComponent implements OnInit {
  @Input() cardList: CardData[] = [];

  constructor() {}

  ngOnInit() {}
}
