import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-btn-number-count",
  templateUrl: "./btn-number-count.component.html",
  styleUrls: ["./btn-number-count.component.scss"],
})
export class BtnNumberCountComponent implements OnInit {
  @Input() amount: number = 0;
  @Output() updateAmount: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  increaseAmount() {
    if (this.amount < 4) {
      this.amount++;
      this.updateAmount.emit(this.amount); // Emitindo o evento
    }
  }

  decreaseAmount() {
    if (this.amount > 0) {
      this.amount--;
      this.updateAmount.emit(this.amount); // Emitindo o evento
    }
  }
}
