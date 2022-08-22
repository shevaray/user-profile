import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { ProfileRoutingModule } from "./profile-routing.module";
import { ProfileComponent } from "./profile.component";

@NgModule({
  declarations:[ProfileComponent],
  imports:[
    CommonModule,
    ProfileRoutingModule,
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})

export class ProfileModule {}
