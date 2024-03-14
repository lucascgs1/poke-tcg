import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-cards-list",
  templateUrl: "./cards-list.component.html",
  styleUrls: ["./cards-list.component.scss"],
})
export class CardsListComponent implements OnInit {
  selectedCards: any[] = [
    {
      name: "teste",
      id: "123",
      quantities: 4,
    },

    {
      name: "teste",
      id: "123",
      quantities: 4,
    },

    {
      name: "teste",
      id: "123",
      quantities: 4,
    },
  ];

  constructor() {}

  ngOnInit() {}
}
