import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Movie from "./components/Movie";
import MovieList from './components/MovieList';
import NavBar from './components/NavBar';
import React, {useState} from "react";
import Stars from './components/Stars';

const App = () => {
  const [movies, setMovies] = useState([
    {   id: 1,
      img:"https://upload.wikimedia.org/wikipedia/en/b/be/Legally_Blonde_film_poster.png",
      title:"Legally Blonde",
      year: 2001,
      info:"Being dumped by her boyfriend for being 'too blonde,' Elle Woods decides to win him back by enrolling in the university he attends, Harvard University.",
  },
  
  {   id: 2,
      img:"https://m.media-amazon.com/images/M/MV5BMzcwYjEwMzEtZTZmMi00ZGFhLWJhZjItMDAzNDVkNjZmM2U5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX671_.jpg",
      title:"Princess Diaries",
      year:2001,
      info:"Dorky teenager Mia Thermopolis gets a surprise of a lifetime when her deceased father's mother shows up and announces that she is a queen and Mia is a princess.",
  },

  {   id: 3,
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTKDBZZMelkBUAFPji4Q16uS089Y3BN1Xckw&usqp=CAU",
      title:"Freaky Friday",
      year:2003,
      info:"A mother-daughter duo with many differences receive cryptic fortunes from a Chinese restaurant and wake up the next day to discover that they have switched bodies. Stuck living life as the other, they are forced to develop a sense of understanding for one another.",
  },

  {   id: 4,
      img:"https://ravanna.vidangel.com/file/ravanna/1/4/movies-10096_0010_07_14facd949705cfb3.jpg",
      title:"13 Going on 30",
      year:2004,
      info:"Thirteen-year-old Jenna Rink wished upon a magical dollhouse to be thirty, flirty, and thriving. When she wakes up, she is an adult with a fancy apartment and a glamorous job. But adulthood isn't all that she expected it to be.",
  },

  {   id: 5,
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj36woYwDd5WYGOSFuumbA4vd6zUNcCnhoRA&usqp=CAU",
      title:"Mean Girls",
      year:2004,
      info:"Katy moves from Africa to the American suburbs and begins to navigate the wild jungle that is high school. Befriending the most powerful clique in school, The Plastics, Katy soon realizes how shallow popularity can really be.",
  },

  {   id: 6,
      img:"https://lumiere-a.akamaihd.net/v1/images/p_enchanted_19751_8adb9bba.jpeg?region=0%2C0%2C540%2C810",
      title:"Enchanted",
      year:2007,
      info:"In a fairy-tale land, Giselle is about to marry her prince charming when his evil stepmother sends her to the one place where no 'happy ever afters' exist: New York City. Giselle meets a cynical lawyer, who helps her find her one true love.",
  },
  ]);
  
  // I had trouble figuring out how to make the images be right next to each other instead of having all of that space between them.
  return (
      <div className='App'>
        <NavBar />
        <div className='container-fluid movie-app mt-5'>
          <div className='row'>
            <MovieList movies = {movies} starsComponent = {Stars} />
          </div>
        </div>
      </div>
  );
}

export default App;