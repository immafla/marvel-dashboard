import { Component, Input } from '@angular/core';
import { Result } from '../../../core/models/marvel.model';

@Component({
  selector: 'app-card-comic',
  standalone: true,
  imports: [],
  templateUrl: './card-comic.component.html',
  styleUrl: './card-comic.component.css'
})
export class CardComicComponent {
  @Input() itemComic:any
}
