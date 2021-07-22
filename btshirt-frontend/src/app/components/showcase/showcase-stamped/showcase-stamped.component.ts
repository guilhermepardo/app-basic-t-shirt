import { Component, OnInit } from '@angular/core';
import { Shirt } from '../../models/shirt.model';
import { ShirtService } from '../../services/shirt.service';

@Component({
  selector: 'app-showcase-stamped',
  templateUrl: './showcase-stamped.component.html',
  styleUrls: ['./showcase-stamped.component.css']
})
export class ShowcaseStampedComponent implements OnInit {

  shirts : Shirt[]

  constructor(
    private shirtService : ShirtService
  ) { }

  ngOnInit(): void {
    this.shirtService.getByType("stamped")
    .subscribe(shirtList => {
      this.shirts = shirtList
    })
  }

}
