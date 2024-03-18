import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import {
  SuperTypesMock as superTypesMock,
  subTypesMock,
  RaritiesMock,
} from "src/app/core/mocks/searchTypes.mock";
import { CardRequest } from "../../../../core/model/cardsRequest.interface";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-search-field",
  templateUrl: "./search-field.component.html",
  styleUrls: ["./search-field.component.scss"],
})
export class SearchFieldComponent implements OnInit {
  @Output() searchOptions: EventEmitter<any> = new EventEmitter<any>();
  superTypesList: string[] = superTypesMock;
  subTypesList: string[] = subTypesMock;
  raritiesList: string[] = RaritiesMock;
  searchForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.searchForm = this.fb.group({
      pokemonName: [''],
      superType: [''],
      subType: [''],
      rarities: [''],
    });
  }

  onSubmit(): void {
    this.searchOptions.emit(this.searchForm.value)
  }
}
