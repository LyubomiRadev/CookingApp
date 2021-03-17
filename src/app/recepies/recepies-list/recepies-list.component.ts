import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.mode';

@Component({
  selector: 'app-recepies-list',
  templateUrl: './recepies-list.component.html',
  styleUrls: ['./recepies-list.component.css']
})
export class RecepiesListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Lazagna','My Lazagna Recipe','https://hips.hearstapps.com/vidthumb/images/180820-bookazine-delish-01280-1536610916.jpg?crop=1xw:1xh;center,top&resize=768:*' )
  ]; 

  constructor() { }

  ngOnInit(): void {
  }

}
