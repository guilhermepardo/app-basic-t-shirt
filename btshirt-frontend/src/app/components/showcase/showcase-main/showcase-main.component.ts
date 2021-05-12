import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Shirt } from '../../models/shirt.model';
import { ShirtService } from '../../services/shirt.service';

@Component({
  selector: 'app-showcase-main',
  templateUrl: './showcase-main.component.html',
  styleUrls: ['./showcase-main.component.css']
})
export class ShowcaseMainComponent implements OnInit {

  shirts : Shirt[]

  shirt : Shirt

  constructor(
    private shirtService : ShirtService,
    private router : Router
  ) { }

  ngOnInit(): void {

    this.shirtService.get().subscribe(shirtList => {
      this.shirts = shirtList
    } )

  }

}
