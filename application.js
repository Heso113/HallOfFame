import ArtistInfo from './artistinfo.js'

document.addEventListener("DOMContentLoaded", loadPage);

let artists = [];
artists.push(new ArtistInfo("Oliver Sykes", 
                            "Metal", 
                            "USA", 
                            "I'm running outta teardrops, let it hurt till it stops. I can't keep my grip, I'm slipping away from me. Oh, God, everything is so fucked, but I can't feel a thing. The emptiness is heavier than you think",
                            "/images/oliver.jpg"
                            ));
artists.push(new ArtistInfo("Jonathan Davis",
                            "Industrial Metal",
                            "USA",
                            "Digging deep inside of me. Getting past this agony. I can't seem to get away. Another day rotting in vain.",
                            "/images/jonathan.jpg"
                            ));
artists.push(new ArtistInfo("Maria Brink", 
                            "Gothic Metal", 
                            "USA", 
                            "I will fall and rise above. And in your hate I find love. 'Cause I'm a survivor. Yeah, I am a fighter.",
                            "/images/maria.jpg"
                            ));
artists.push(new ArtistInfo("Ronnie Radke", 
                            "Rapcore", 
                            "USA", 
                            "'Cause everybody's on drugs. It's hard to believe, the American dream is a killing machine. We're all falling in love with a new disease. If it's killing you, then it's murdering me.",
                            "/images/ronnie.jpg"
                            ));
artists.push(new ArtistInfo("Phil Anselmo", 
                            "Heavy Metal", 
                            "USA", 
                            "Can't you see I'm easily bothered by persistence? One step from lashing out at you. You want in to get under my skin and call yourself a friend. I've got more friends like you, what do I do?",
                            "/images/phil.jpg"
                            ));
artists.push(new ArtistInfo("Anders Fridén", 
                            "Melodic Death Metal", 
                            "Sweden", 
                            "Collect some stars to shine for you, and start today 'cause there's only a few. A sign of times my friend.",
                            "/images/anders.jpg"
                            ));
artists.push(new ArtistInfo("Joe Duplantier", 
                            "Progressive Metal", 
                            "France", 
                            "Waters of chaos have invaded all space. The flood on Earth again, I have to find the whales. That once did guide us to dry lands of life. I won't despair, I'll break this dark around.",
                            "/images/joe.jpg"
                            ));
artists.push(new ArtistInfo("Corey Taylor", 
                            "Nu Metal", 
                            "USA", 
                            "She's sticking needles in her skin, I turn with an ugly grin. Her canvas doesn't leave a lot... to fantasy. But her peace of mind can't stay inside the lines. It's so... confusing, the methods that she's using.",
                            "/images/corey.jpg"
                            ));                      
artists.push(new ArtistInfo("Serj Tankian", 
                            "Alternative Metal", 
                            "USA", 
                            "Blast off, it's party time, and we don't live in a fascist nation. Blast off, it's party time, and where the fuck are you?",
                            "/images/serj.jpg"
                            ));


function loadPage() {
    for (let i = 0; i < artists.length; i++) {
        document.getElementById('artistName' + i).innerHTML = artists[i].getName();
        document.getElementById('artistGenre' + i).innerHTML = 'Genre: ' + artists[i].getGenre();
        document.getElementById('artistCountry' + i).innerHTML = 'Born in: ' + artists[i].getCountry();
        document.getElementById('artistLyrics' + i).innerHTML =  "\"" + artists[i].perform() + "\"";
        document.getElementById('image' + i).src = artists[i].getImage();
    }   
    changeSpotlight();
}


function changeSpotlight() {
    var randomIndex = Math.floor(Math.random() * artists.length);
    document.getElementById('spotlightArtistName').innerHTML = artists[randomIndex].getName();
    document.getElementById('spotlightArtistGenre').innerHTML = 'Genre: ' + artists[randomIndex].getGenre();
    document.getElementById('spotlightArtistCountry').innerHTML = 'Born in: ' + artists[randomIndex].getCountry();
    document.getElementById('spotlightArtistLyrics').innerHTML =  "\"" + artists[randomIndex].perform() + "\"";
    document.getElementById('spotlightImage').src = artists[randomIndex].getImage();
}

