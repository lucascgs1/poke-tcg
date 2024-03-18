import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BtnNumberCountComponent } from "./btn-number-count.component";

describe("BtnNumberCountComponent", () => {
  let component: BtnNumberCountComponent;
  let fixture: ComponentFixture<BtnNumberCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BtnNumberCountComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnNumberCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
