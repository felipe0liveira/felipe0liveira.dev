import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CodepenComponent } from './components/codepen/codepen.component';
import { BlogComponent } from './components/blog/blog.component';

@NgModule({
  declarations: [AppComponent, CodepenComponent, BlogComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
