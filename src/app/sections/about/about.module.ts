import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AboutComponent } from "./about.component";
import { TitleModule } from "../../components";
import { MatButtonModule } from "@angular/material/button";
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  imports: [CommonModule, MatButtonModule, FlexLayoutModule, TitleModule],
  declarations: [AboutComponent],
  exports: [AboutComponent],
})
export class AboutModule {}
