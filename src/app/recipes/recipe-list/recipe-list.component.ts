import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes : Recipe[] = [
  new Recipe('Masal Dosa','Test','https://i0.wp.com/media.hungryforever.com/wp-content/uploads/2015/04/Featured-image-masala-dosa-recipe.jpg?ssl=1?w=1269&strip=all&quality=80'),
  new Recipe('Masal Dosa','Test','https://i0.wp.com/media.hungryforever.com/wp-content/uploads/2015/04/Featured-image-masala-dosa-recipe.jpg?ssl=1?w=1269&strip=all&quality=80')
  ];

  constructor() { }

  ngOnInit() {
  }

}
