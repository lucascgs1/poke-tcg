import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "./material/material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NavMenuComponent } from "./components/nav-menu/nav-menu.component";

@NgModule({
  declarations: [NavMenuComponent],
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule],
  exports: [MaterialModule, FormsModule, ReactiveFormsModule, NavMenuComponent],
})
export class SharedModule {}
