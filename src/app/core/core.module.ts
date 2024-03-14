import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { HttpClientService } from "./services/http-client.service";
import { CacheService } from "./services/cache.service";

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  exports: [HttpClientModule],
  providers: [HttpClientService, CacheService],
})
export class CoreModule {}
