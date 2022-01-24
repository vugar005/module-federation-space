import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
@NgModule({
  declarations: [AppComponent, WrapperComponent, HeaderComponent, SidebarComponent],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, MatButtonModule, MatListModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
