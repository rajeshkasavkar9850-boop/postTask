import { Component } from '@angular/core';
import { Icard } from './models/cards';
import { mountainRanges, spaceMissions, worldCuisines } from './consts/card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Space Missions';

  spaceMissionsArr:Array<Icard> = spaceMissions;
  title1 = 'World Cuisines';
  worldCuisinesArr :Array<Icard> = worldCuisines;

  title2 = 'Mountain Ranges';
  mountainRangesArr: Array<Icard> = mountainRanges;

}
