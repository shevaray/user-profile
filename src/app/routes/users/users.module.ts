import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { SHARED_ZORRO_MODULES } from "src/app/shared/shared-zorro.module";
import { UsersRoutingModule } from "./users-routing.module";
import { UsersComponent } from "./users.component";


@NgModule({
  declarations:[UsersComponent],
  imports:[
    CommonModule,
    UsersRoutingModule,
    ...SHARED_ZORRO_MODULES,
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})

export class UsersModule {}
