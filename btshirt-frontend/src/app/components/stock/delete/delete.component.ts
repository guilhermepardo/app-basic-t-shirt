import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Shirt } from '../../models/shirt.model';
import { ShirtService } from '../../services/shirt.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  shirt : Shirt

  constructor(
    private shirtService : ShirtService,
    private router : Router,
    private activatedRoute : ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id')
    this.shirtService.getById(id).subscribe(shirt => {
      this.shirt = shirt
    })
  }

  deleteShirt() : void {
    this.shirtService.delete(this.shirt).subscribe(() => {
      this.shirtService.popInfo('Camiseta deletada')
      this.router.navigate(['/estoque'])
    })
  }

  cancel() : void {
    this.router.navigate(['/estoque'])
  }

}
