import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs-service.service';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private gifsService: GifsService) {
  }

  get gifs(): Gif[]{
    return this.gifsService.gifList;
  }


}
