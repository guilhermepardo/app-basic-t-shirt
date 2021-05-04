import { Component, OnInit } from '@angular/core';
import { Shirt } from '../../models/shirt.model';
import { ShirtService } from '../../services/shirt.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  shirts : Shirt[]

  constructor(
    private shirtService : ShirtService
  ) { }

  ngOnInit(): void {
    this.shirtService.get().subscribe(shirtList => {
      this.shirts = shirtList
    } )
  }

}
