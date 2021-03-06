import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Film} from '../../../models/film';

@Component({
	selector: 'app-film-bucket',
	templateUrl: './film-bucket.component.html',
	styleUrls: ['./film-bucket.component.scss']
})
export class FilmBucketComponent implements OnInit {

	@Input() public bucketFilms: Film[] = [];
	@Output() public onRemoveFilm = new EventEmitter<Film>();

	constructor() {
	}

	ngOnInit() {
	}

	handleDeleteButtonClick(film: Film): void {
		this.onRemoveFilm.emit(film);
	}
}
