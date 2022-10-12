import { HomeModule } from './modules/home/home.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GatewayModule } from './services/gateways/gateways.module';
import { ReadingJsonService } from './services/read-json.service';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    GatewayModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [ReadingJsonService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
