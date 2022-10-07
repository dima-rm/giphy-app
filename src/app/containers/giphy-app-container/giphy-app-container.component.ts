import {Component, OnInit} from '@angular/core';
import {GifService} from '../../services/gif.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-giphy-app-container',
  templateUrl: './giphy-app-container.component.html',
  styleUrls: ['./giphy-app-container.component.scss']
})
export class GiphyAppContainerComponent implements OnInit {
  searchTerm: any;
  gifsSearchResult$: Observable<any> | undefined;


  // Pagination
  pageSize = 9;
  currentPage = 0;
  offset = 0;

  constructor(private gifService: GifService) {
  }

  ngOnInit(): void {
    this.gifService.getTopGifts(this.offset.toString());
    this.gifsSearchResult$ = this.gifService.getGifsResult();
  }

  searchGifs(searchTerm: any): void {
    if (searchTerm && searchTerm?.trim() !== '') {
      this.searchTerm = searchTerm;
      this.gifService.searchGifByName(searchTerm, this.offset.toString() )
    }
  }

  handlePage(e: any): void {
    this.currentPage = e.pageIndex;
    this.offset = this.currentPage * this.pageSize;
    if (this.searchTerm) {
      this.searchGifs(this.searchTerm);
    } else {
      this.gifService.getTopGifts(this.offset.toString());
    }
  }
}
