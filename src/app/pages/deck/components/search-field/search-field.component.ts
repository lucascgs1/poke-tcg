import { Component, OnInit } from "@angular/core";
import {
  SuperTypesMock as superTypesMock,
  subTypesMock,
  RaritiesMock,
} from "src/app/core/mocks/searchTypes.mock";

@Component({
  selector: "app-search-field",
  templateUrl: "./search-field.component.html",
  styleUrls: ["./search-field.component.scss"],
})
export class SearchFieldComponent implements OnInit {
  superTypesList: string[] = superTypesMock;
  subTypesList: string[] = subTypesMock;
  raritiesList: string[] = RaritiesMock;

  constructor() {}

  ngOnInit() {}
}
