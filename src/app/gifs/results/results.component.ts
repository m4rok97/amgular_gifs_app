import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';
import { Gif } from '../interfaces/gifs.interface';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {
  constructor(private _gifsService: GifsService) {}

  ngOnInit(): void {}

  get results(): Gif[] {
    return this._gifsService.results;
  }
}
