import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private shirtService : ShirtService,
    private router : Router
  ) { }

  createProduct() : void {
    this.shirtService.post(this.shirt).subscribe(() => {
      this.shirtService.popInfo('Camiseta adicionada com sucesso')
      this.router.navigate(['/estoque'])
    })
  }

  cancel() : void {
    this.router.navigate(['/estoque'])
  }

}
