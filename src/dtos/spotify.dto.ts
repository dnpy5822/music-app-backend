import { IsString } from 'class-validator';

export class SpotifyMusic {
  @IsString()
  public readonly name: string;
}
