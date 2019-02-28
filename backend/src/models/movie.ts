export class Movie {
	constructor(
		public readonly title: string,
		public readonly year: number,
		public readonly imdbId: string,
		public readonly type: string,
		public readonly posterUrl: string
	) {}
}
