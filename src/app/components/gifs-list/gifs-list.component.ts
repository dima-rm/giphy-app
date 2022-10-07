import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-gifs-list',
  template: `
    <mat-grid-list cols="3" rowHeight="1:1">
      <mat-grid-tile *ngFor="let gif of gifs">
        <img [src]=gif.images.downsized.url [alt]="gif.title">
      </mat-grid-tile>
    </mat-grid-list>`,
  styleUrls: ['./gifs-list.component.scss']
})
export class GifsListComponent {
  @Input() gifs: any;
}
