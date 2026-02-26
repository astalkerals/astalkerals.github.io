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

    static first = "true";

    get item(){
        
        const section = document.createElement("section");
        section.classList.add("one");

        const a1 = document.createElement("a");
        a1.href = "#";

        const  h3 = document.createElement("h3");
        h3.innerHTML = this.title;
        a1.append(h3);

        const p = document.createElement("p");
        p.innerHTML = "By " + this.artist;
        a1.append(p);

        const img = document.createElement("img");
        img.src = this.coverArt;
        a1.append(img);

        section.append(a1);
        const modal = document.getElementById("modal");


        
        a1.onclick = (e) => {
            e.preventDefault();
            const modalh3 = document.createElement("h3");
            const modalText = document.getElementById("modal-text");
            const modalp = document.createElement("p");

            if(this.first == "true"){
                document.getElementById("video").innerHTML = this.youtubeCode;

                
                modalh3.innerHTML = this.title;
                
                modalText.append(modalh3);

                
                modalp.innerHTML = "by " + this.artist + "<br><br>" + this.album + ", " + this.year + "<br><br>" + this.genre;
                modalText.append(modalp);  
                this.first = "false"; 
            }
            else{
                document.getElementById("video").innerHTML = this.youtubeCode;
                modalh3.innerHTML = this.title;
                modalp.innerHTML = "by " + this.artist + "<br><br>" + this.album + ", " + this.year + "<br><br>" + this.genre;
            }
            
            modal.classList.add("visible");
            
            
        }
        window.onclick = (e) => {
            if(e.target == modal){
                modal.classList.add("hidden");
            }
        }
        
        return section;

    }

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

//Youtube codes
const buttercupCode = `<iframe width=100% height=100% src="https://www.youtube.com/embed/ng_MgcBXifI?si=jAYq7Jj44wPLizCB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
const lovinCode = `<iframe width=100% height=100% src="https://www.youtube.com/embed/L7__ayX3ESo?si=6sRPOUS-UUNuRtD_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;

const songs = [];
songs.push(new Song("Build Me Up Buttercup","The Foundations","Build Me Up Buttercup",1968,"Soul","images/buttercupcover.jpg",buttercupCode));
songs.push(new Song("Lovin' You","The Lovin' Spoonful","Hums of the Lovin' Spoonful",1967,"Folk-rock","images/lovincover.jpg",lovinCode));

songs.forEach((song) => {
    document.getElementById("songs").append(song.item);
});