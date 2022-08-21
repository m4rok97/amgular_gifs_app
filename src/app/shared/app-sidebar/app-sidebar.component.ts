import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './app-sidebar.component.html',
  styleUrls: ['./app-sidebar.component.css'],
})
export class AppSidebarComponent implements OnInit {

  get history() {
    return this._gifsService.history;
  }

  constructor(private _gifsService: GifsService) {}

  ngOnInit(): void {}


  search(value: string){
    this._gifsService.searchGifs(value);

  }
}
