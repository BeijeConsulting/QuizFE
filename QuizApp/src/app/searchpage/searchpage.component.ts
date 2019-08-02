import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.scss']
})
export class SearchpageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }



  search(tag): void {

  }

}



// <input [(ngModel)]="selectedHero.name" placeholder="name"/> nell'ngModel devi mettere tra apici la categoria degli elemnti che deve prendere
