import { Component, OnInit } from '@angular/core';
import { Shirt } from '../../models/shirt.model';
import { ShirtService } from '../../services/shirt.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  shirt : Shirt = {
    name: '',
    size: '',
    price: null,
    type: '',
    url: ''
  }

  constructor(
    private shirtService : ShirtService
  ) { }

  createProduct() : void {
    this.shirtService.post(this.shirt)
  }

}
