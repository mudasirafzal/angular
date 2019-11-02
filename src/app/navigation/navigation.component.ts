import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.css"]
})
export class NavigationComponent implements OnInit {
  activetab = "home";
  constructor() {}
  getActiveTab(tabname: string) {
    this.activetab = tabname;
  }
  ngOnInit() {}
}