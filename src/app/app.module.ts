import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { AppComponent } from './app.component';
import { TestPipe } from './test.pipe';
import { HeroListBasicComponent } from './hero-list-basic/hero-list-basic.component';


@NgModule({
  declarations: [
    AppComponent,
    TestPipe,
    HeroListBasicComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
