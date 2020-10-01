
//Global variables - db for songs
const songs = [
  {
    title: 'We Know The Way',
    artist: 'Moana',
    image: 'img/moana.jpg',
    url: 'https://www.youtube.com/watch?v=ubZrAmRxy_M&list=WL&index=29'
  },
	{
		title: 'Black Thunder',
		artist: 'The Hu',
		image: 'img/hu.jpg',
    url: 'https://www.youtube.com/watch?v=epAhB39OXSU&list=WL&index=41'
	},
	{
    title: 'Requiem',
		artist: 'Altan Urag',
		image: 'img/altan-urag.jpg',
    url: 'https://www.youtube.com/watch?v=UabFYUqITg8&list=WL&index=45'
	},
  {
    title: 'True Sisters',
		artist: 'Sofia the First',
		image: 'img/SofiaCinderela.jpg',
    url: 'https://www.youtube.com/watch?v=abSYQXBJvGc'
	},
  {
    title: 'The Simple Life',
		artist: 'Sofia the First',
		image: 'img/The-Simple-Life.png',
    url: 'https://www.youtube.com/watch?v=-kv10oU0Bro&list=WL&index=22'
	},
  {
    title: 'Let It Go',
		artist: 'Frozen',
		image: 'img/frozen.jpg',
    url: 'https://www.youtube.com/watch?v=BKCsFB5bPz8&list=WL&index=27'
	},
  {
    title: 'Brother Louie',
		artist: 'Modern Talking',
		image: 'img/modern-talking.jpg',
    url: 'https://www.youtube.com/watch?v=Lp2qcCrdBLA&list=WL&index=9'
	},
  {
    title: 'Dancing Queen',
		artist: 'ABBA',
		image: 'img/abba.jpg',
    url: 'https://www.youtube.com/watch?v=xFrGuyw1V8s'
	},
  {
    title: 'Suteki Da Ne',
		artist: 'Final Fantasy X',
		image: 'img/final-fantasy.jpg',
    url: 'https://www.youtube.com/watch?v=xlwSPMwAqbM'
	},
  {
    title: 'Last Christmas',
		artist: 'Wham!',
		image: 'img/wham.jpg',
    url: 'https://www.youtube.com/watch?v=E8gmARGvPlI'
	},
  {
    title: 'Nas Ne Dogonyat',
		artist: 't.A.T.u.',
		image: 'img/tatu.jpg',
    url: 'https://www.youtube.com/watch?v=PRMgavw2bZ4'
	},
  {
    title: 'Babe',
		artist: 'Take That',
		image: 'img/take-that.jpg',
    url: 'https://www.youtube.com/watch?v=MviFdVHltEM'
	},
  {
    title: 'Time To Say Goodbye',
		artist: 'Sarah Brightman',
		image: 'img/Sarah_Brightman.jpg',
    url: 'https://www.youtube.com/watch?v=mH4osTwddUg'
	},
  {
    title: 'Viva Forever',
		artist: 'Spice Girls',
		image: 'img/Spice-Girls.jpg',
    url: 'https://www.youtube.com/watch?v=3wkuqRFXNvI'
	},
  {
    title: 'Living In A Fantasy',
		artist: 'BWO',
		image: 'img/bwo.png',
    url: 'https://www.youtube.com/watch?v=RQ1Mi9G78hI'
	}
];

window.addEventListener('load', function(event) {
    //printing songs
    createCards(songs);


     //search function
    var searchBtn = document.getElementById('searchBtn');
	  searchBtn.addEventListener('click', function(event){

        var inputVal = document.getElementById("searchInput").value;

        var arrayBeg = [];
       	var arrayEnd = [];
       	if (inputVal === "") {
       			console.log("Search field is empty");
       	} else {
       				var term = inputVal.toLowerCase();
              //searching by title
       			  for (var i = 0; i < songs.length; i++) {
       					var songTitle = songs[i].title.toLowerCase();
       			  	if (songTitle.includes(term)) {
       							if (songTitle.startsWith(term)) {
       									arrayBeg.push(songs[i]);
       							} else {
       									arrayEnd.push(songs[i]);
       							}
       			  	}
       			  }//end of for

              //searching by artist
              for (var i = 0; i < songs.length; i++) {
                 var songArtist = songs[i].artist.toLowerCase();
                 if (songArtist.includes(term)) {


                     if (songArtist.startsWith(term)) {

                           //checks if song is already in the arrayBeg
                           if(arrayBeg.some(song => song.title === songs[i].title)){
                                console.log("Object found inside the array.");
                            } else{
                                arrayBeg.push(songs[i]);
                            }


                     } else {

                       //checks if song is already in the arrayEnd
                       if(arrayEnd.some(song => song.title === songs[i].title)){
                            console.log("Object found inside the array.");
                        } else{
                            arrayEnd.push(songs[i]);
                        }

                     }
                 }
               }//end of for


       				var array = arrayBeg.concat(arrayEnd);
       	}//end of if else

        if (array === undefined || array.length == 0) {
            console.log('array is empty');
            createCards(songs);
        } else {
            console.log('array is not empty');
            //if searched song is in the db, clears the result div
              let cardsDiv = document.getElementById("cards");
              while (cardsDiv.firstChild) {
                cardsDiv.removeChild(cardsDiv.lastChild);
              }
              createCards(array);

        }


	  })//end of searchBtn eventListener




}); //windows.load


//taking array as parameter and prints it on the html page
function createCards(arr){

      //accessing the card div
      let cardsDiv = document.getElementById("cards");


      var i;
      for (i = 0; i < arr.length; i++) {
        //console.log(songs[i].title);

        //creating h3 tag with song title
        let titleH3 = document.createElement("h3");
        let title = document.createTextNode(arr[i].title);
        titleH3.appendChild(title);

        //creating p tag with artist name
        let artistP = document.createElement("p");
        let artist = document.createTextNode(arr[i].artist);
        artistP.appendChild(artist);

        //creating text cardsDiv
        let textDiv = document.createElement("div");
        textDiv.classList.add('text', 'inline');
        textDiv.appendChild(titleH3);
        textDiv.appendChild(artistP);

        //creating a tag
        let aImg = document.createElement("a");
        aImg.setAttribute("href", arr[i].url);
        aImg.setAttribute("target", "_blank");

        let image = document.createElement("img");
        image.setAttribute("src", arr[i].image);
        image.setAttribute("alt", "song");
        aImg.appendChild(image);

        //creating card div
        let cardDiv = document.createElement("div");
        cardDiv.classList.add('card', 'column', 'xs-twelve', 'sm-six', 'md-four', 'lg-three');
        cardDiv.appendChild(aImg);
        cardDiv.appendChild(textDiv);

        cardsDiv.appendChild(cardDiv);

      }//end of for

}




//
