import { Component, OnInit } from "@angular/core";
import { ConfigService } from "../config.service";

@Component({
  selector: "app-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.css"]
})
export class ContentComponent implements OnInit {
  service = {};
  constructor(private config: ConfigService) {}

  ngOnInit() {
    this.service = this.getservice();
  }
  getservice() {
    return this.config.getconfig().services;
  }
}
