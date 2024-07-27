import { Component, OnInit } from '@angular/core';
import { CardComicComponent } from '../../shared/molecules/card-comic/card-comic.component';
import { MarvelService } from '../../core/services/marvel.service'
import { Result } from '../../core/models/marvel.model';

@Component({
  selector: 'app-comics',
  standalone: true,
  imports: [
    CardComicComponent
  ],
  templateUrl: './comics.component.html',
  styleUrl: './comics.component.css'
})
export class ComicsComponent implements OnInit {
  comics: Result[] = []
  constructor(private marvelService:MarvelService){}

  ngOnInit(): void {
    this.marvelService.getAllComics().subscribe((value) => this.comics = value.data.results)
  }
}
