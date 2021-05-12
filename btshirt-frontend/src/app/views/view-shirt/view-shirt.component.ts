import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Shirt } from 'src/app/components/models/shirt.model';
import { ShirtService } from 'src/app/components/services/shirt.service';

@Component({
  selector: 'app-view-shirt',
  templateUrl: './view-shirt.component.html',
  styleUrls: ['./view-shirt.component.css']
})
export class ViewShirtComponent implements OnInit {

  shirt : Shirt

  constructor(
    private shirtService : ShirtService,
    private activatedRoute : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.shirtService.getById(
      this.activatedRoute.snapshot.paramMap.get('id')
      ).subscribe(shirt => {
        this.shirt = shirt
      })
  }

}
