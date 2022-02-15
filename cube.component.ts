import { Component } from '@angular/core';

@Component({
  selector: 'Cube-Volume',
  templateUrl: './cube.component.html'
})
export class CubeComponent{
    cside:number;
    volume:number;
  constructor() {
        this.cside = 0;
        this.volume = this.cside*this.cside*this.cside;
   }

  onCalculateVolume(){
    this.volume = this.cside*this.cside*this.cside;
  }

}
