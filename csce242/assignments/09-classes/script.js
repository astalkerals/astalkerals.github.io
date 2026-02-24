class Song {
    constructor(title, artist, album, year, genre, coverArt, youtubeCode){
        this.title = title;
        this.artist = artist;
        this.album = album;
        this.year = year;
        this.genre = genre;
        this.coverArt = coverArt;
        this.youtubeCode = youtubeCode;
    };

    moreInfo() {
        const ul = document.createElement("ul");
        ul.classList.add("hidden");
        ul.append(infoLi("Title", this.title));
        ul.append(infoLi("Artist",this.artist));
        ul.append(infoLi("Album", this.album));
        ul.append(infoLi("Year", this.year));
        ul.append(infoLi("Genre",this.genre));

        return ul;
    }

}