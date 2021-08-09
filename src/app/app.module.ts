
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AnimationCandyComponent } from './animation/animation-candy/animation-candy.component';
import { AnimationFontComponent } from './animation/animation-font/animation-font.component';
import { AnimationHeartComponent } from './animation/animation-heart/animation-heart.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    AnimationHeartComponent,
    AnimationFontComponent,
    AnimationCandyComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
