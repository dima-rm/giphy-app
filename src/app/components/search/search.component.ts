import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  @Input() searchTerm: any;
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  onSearch(searchTerm: string): void {
    console.log('searchTerm')
    if (searchTerm && searchTerm !== '') {
      this.search.emit(searchTerm);
    }
  }
}
