// component
import { NavMenuComponent } from "./components/nav-menu/nav-menu.component";

// module
import { MaterialModule } from "./material/material.module";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

// package
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [NavMenuComponent],
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule],
  exports: [MaterialModule, NavMenuComponent],
})
export class SharedModule {}
