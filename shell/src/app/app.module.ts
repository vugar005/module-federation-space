import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './main/main.component';
import { StockPriceTableComponent } from './main/stock-price-table/stock-price-table.component';
@NgModule({
  declarations: [AppComponent, WrapperComponent, HeaderComponent, SidebarComponent, MainComponent, StockPriceTableComponent],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, MatButtonModule, MatListModule, MatTableModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
