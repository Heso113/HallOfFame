export default class ArtistInfo {
    constructor(name, genre, country, lyrics, image) {
        this.name = name;
        this.genre = genre;
        this.country = country;
        this.image = image;
        this.lyrics = lyrics;
    }

    getName() {
        return this.name;
    }

    getGenre() {
        return this.genre;
    }

    getCountry() {
        return this.country;
    }

    getImage() {
        return this.image;
    }

    perform() {
        return this.lyrics;
    }
}