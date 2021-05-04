import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shirt-stock',
  templateUrl: './shirt-stock.component.html',
  styleUrls: ['./shirt-stock.component.css']
})
export class ShirtStockComponent implements OnInit {

  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  create() : void {
    this.router.navigate(['/estoque/criar'])
  }

}
