import { Component, OnInit } from "@angular/core";

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTE: RouteInfo[] = [
  { path: "/user/completed/1", title: "detailscompleted", icon: "", class: "" }
];

@Component({
  selector: "app-user-completed",
  templateUrl: "./user-completed.component.html",
  styleUrls: ["./user-completed.component.scss"]
})
export class UserCompletedComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
