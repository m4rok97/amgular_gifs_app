import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  @ViewChild('textSearch') textSearch!: ElementRef<HTMLInputElement>;

  constructor(private _gifsService: GifsService) {}

  ngOnInit(): void {}
  search() {
    const query = this.textSearch.nativeElement.value;

    this._gifsService.searchGifs(query);

    console.log(query);
  }
}
