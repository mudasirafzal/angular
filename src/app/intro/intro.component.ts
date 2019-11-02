import { Component, OnInit } from "@angular/core";
import { ConfigService } from "../config.service";

@Component({
  selector: "app-intro",
  templateUrl: "./intro.component.html",
  styleUrls: ["./intro.component.css"]
})
export class IntroComponent implements OnInit {
  intro = {};
  constructor(private config: ConfigService) {}

  ngOnInit() {
    this.intro = this.getintro();
  }

  getintro() {
    return this.config.getconfig().intro;
  }
}
