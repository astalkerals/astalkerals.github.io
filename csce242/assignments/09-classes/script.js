let first=true;

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
        const modalText = document.getElementById("modal-text");
        const video = document.getElementById("video");
        

        const hideModal = () => {
            modalText.classList.add("hidden");
            video.classList.add("hidden");
            modalText.classList.remove("visible");
            video.classList.remove("visible");  
        }

        const showModal = () => {
            modalText.classList.remove("hidden");
            video.classList.remove("hidden"); 
            modalText.classList.add("visible");
            video.classList.add("visible"); 
        }

        hideModal();
        
        a1.onclick = (e) => {
            e.preventDefault();
            const modalh3 = document.getElementById("h3");
            const modalp = document.getElementById("p");
            document.getElementById("video").innerHTML = this.youtubeCode;
            
            /*document.getElementById("video").innerHTML = this.youtubeCode;
            modalh3.innerHTML = this.title;
            modalp.innerHTML = "by " + this.artist + "<br><br>" + this.album + ", " + this.year + "<br><br>" + this.genre;*/
            

            if(first == true){
                

                modalh3.innerHTML = this.title;
                
                //modalText.append(modalh3);

                modalp.innerHTML = "by " + this.artist + "<br><br>" + this.album + ", " + this.year + "<br><br>" + this.genre;
                //modalText.append(modalp);  
                first = false; 
            }
            else{
                document.getElementById("video").innerHTML = this.youtubeCode;
                modalh3.innerHTML = this.title;
                modalp.innerHTML = "by " + this.artist + "<br><br>" + this.album + ", " + this.year + "<br><br>" + this.genre;
            }
                
            
            showModal();
            document.getElementById("grey-zone").style.display = "block";
            
            
        }
        
        document.getElementById("x").onclick = () =>{ 
            hideModal();
            document.getElementById("grey-zone").style.display = "none";
            video.innerHTML = ``;
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
const buttercupCode = `<iframe src="https://www.youtube.com/embed/1eMsDMBPDe4?si=SrgQuh7mP6sbbEr6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
const lovinCode = `<iframe src="https://www.youtube.com/embed/L7__ayX3ESo?si=6sRPOUS-UUNuRtD_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
const worryCode = `<iframe src="https://www.youtube.com/embed/7SiM1P4_2Fg?si=7XcmU0JTcvzZCTOW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
const motherlodeCode = `<iframe src="https://www.youtube.com/embed/MBlpfXLQLvU?si=K56YslP5oSoNLmdc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;

const songs = [];
songs.push(new Song("Build Me Up Buttercup","The Foundations","Build Me Up Buttercup",1968,"Soul","images/buttercupcover.jpg",buttercupCode));
songs.push(new Song("Lovin' You","The Lovin' Spoonful","Hums of the Lovin' Spoonful",1967,"Folk-rock","images/lovincover.jpg",lovinCode));
songs.push(new Song("Don't Worry Baby","The Beach Boys","Shut Down Volume 2",1977,"Rock","images/worrycover.jpg",worryCode));
songs.push(new Song("The MotherLode","The Staves","Dead & Born & Grown",2012,"Indie Folk","images/growncover.jpg",motherlodeCode));

songs.forEach((song) => {
    document.getElementById("songs").append(song.item);
});