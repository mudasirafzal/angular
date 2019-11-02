import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AngularFontAwesomeModule } from "angular-font-awesome";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { IntroComponent } from "./intro/intro.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { ContentComponent } from "./content/content.component";
import { TestimonialComponent } from "./testimonial/testimonial.component";
import { ClientsComponent } from "./clients/clients.component";
import { PricingComponent } from "./pricing/pricing.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { SocialComponent } from "./social/social.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { ConfigService } from "./config.service";
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    GalleryComponent,
    ContentComponent,
    TestimonialComponent,
    ClientsComponent,
    PricingComponent,
    FooterComponent,
    HeaderComponent,
    SocialComponent,
    NavigationComponent,
    HomeComponent
  ],
  imports: [BrowserModule, AppRoutingModule, AngularFontAwesomeModule],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule {}
