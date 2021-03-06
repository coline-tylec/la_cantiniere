import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu/menu.service';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {
  public ingredients: any;
  private souscription: Subscription;

  constructor(private menuService: MenuService) {

  }

  ngOnInit() {
    this.getIngredients()
  }

  getIngredients() {
    this.souscription = this.menuService.getIngredients()
      .subscribe(
        resp => {
          this.ingredients = resp;
          console.log(this.ingredients);

        }
      )
  }

  deleteIngredient(id) {
    this.menuService.deleteIngredient(id)
    this.getIngredients()
  }

}
