export class Recipe {
  public name: string;
  public longDescription: string;
  public imageUrl: string;

  constructor(name: string, longDescription: string, imageUrl: string) {
    this.name = name;
    this.longDescription = longDescription;
    this.imageUrl = imageUrl;
  }
}
