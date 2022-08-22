import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HeaderComponent } from "./header.component";

@NgModule({
  declarations:[
    HeaderComponent
  ],
  imports:[
    CommonModule,
    RouterModule,
  ],
  exports:[HeaderComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})

export class HeaderModule {}
