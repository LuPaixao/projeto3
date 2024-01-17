import { Movie } from "./models/constructor.js";

const movieLista = [
    new Movie(
        false, "https://image.tmdb.org/t/p/w500/5YZbUmjbMa3ClvSW1Wj3D6XGolb.jpg", 
        447365, "en", "Guardians of the Galaxy Vol. 3", 
        "Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.", 
        4145.055, "https://image.tmdb.org/t/p/w500/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg", 
        new Date("2023-05-03"), "Guardians of the Galaxy Vol. 3", false, 8.1, 3154)
]

function exibirMovie(){
    movieLista.forEach(movie =>{

        const tdMovieAdult = document.querySelector('#movie_adult');
        for (const movie of movieLista) {
            const movieAdult = movie.adult;
            tdMovieAdult.innerHTML = movieAdult.toString();
        }

        const tdMovieBack = document.getElementById("movie_back");
        const selectedMovie = movieLista.find(movie => movie.id === 447365);
        tdMovieBack.textContent = selectedMovie.backdrop_path;

        const tdMokemonId = document.querySelector(`#movie_id`);
        const movieId = movie.id.toString();
        tdMokemonId.textContent = movieId;


    });
}
window.addEventListener('DOMContentLoaded', exibirMovie);
