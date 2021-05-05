import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Shirt } from '../../models/shirt.model';
import { ShirtService } from '../../services/shirt.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

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

  updateShirt() : void {
    this.shirtService.put(this.shirt).subscribe(() => {
      this.shirtService.popInfo('Informações atualizadas!')
      this.router.navigate(['/estoque'])
    })
  }

  cancel() : void {
    this.router.navigate(['/estoque'])
  }

}
