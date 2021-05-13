import { Component, OnInit } from '@angular/core';
import { Shirt } from '../../models/shirt.model';
import { ShirtService } from '../../services/shirt.service';

@Component({
  selector: 'app-showcase-basic',
  templateUrl: './showcase-basic.component.html',
  styleUrls: ['./showcase-basic.component.css']
})
export class ShowcaseBasicComponent implements OnInit {

  shirts : Shirt[]

  constructor(
    private shirtService : ShirtService
  ) { }

  ngOnInit(): void {
    this.shirtService.getByType("BÁSICA")
    .subscribe(shirtList => {
      this.shirts = shirtList
    })
  }

}
