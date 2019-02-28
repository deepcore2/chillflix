import {ApiModelProperty} from "@nestjs/swagger";
import {IsNumber, IsString} from 'class-validator';

export class CreateMovieDto {
	@IsString()
	@ApiModelProperty()
	public readonly title: string;

	@IsNumber()
	@ApiModelProperty()
	public readonly year: number;

	@IsString()
	@ApiModelProperty()
	public readonly imdbId: string;

	@IsString()
	@ApiModelProperty()
	public readonly type: string;

	@IsString()
	@ApiModelProperty()
	public readonly posterUrl: string;

	play() {
		console.log("movie is playing");
	}
}
