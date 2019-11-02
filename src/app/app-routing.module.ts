import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { IntroComponent } from "./intro/intro.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { ContentComponent } from "./content/content.component";
import { TestimonialComponent } from "./testimonial/testimonial.component";
import { ClientsComponent } from "./clients/clients.component";
import { PricingComponent } from "./pricing/pricing.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "about", component: IntroComponent },
  { path: "gallery", component: GalleryComponent },

  { path: "services", component: ContentComponent },
  { path: "testimonials", component: TestimonialComponent },
  { path: "pricing", component: PricingComponent },
  { path: "clients", component: ClientsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
