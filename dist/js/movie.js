import { Movie } from "./models/constructor.js";
const movieLista = [
    new Movie(false, "https://image.tmdb.org/t/p/w500/5YZbUmjbMa3ClvSW1Wj3D6XGolb.jpg", 447365, "en", "Guardians of the Galaxy Vol. 3", "Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.", 4145.055, "https://image.tmdb.org/t/p/w500/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg", new Date("2023-05-03"), "Guardians of the Galaxy Vol. 3", false, 8.1, 3154)
];
function exibirMovie() {
    movieLista.forEach(movie => {
        const tdMovieAdult = document.querySelector('#movie_adult');
        for (const movie of movieLista) {
            const movieAdult = movie.adult;
            tdMovieAdult.innerHTML = movieAdult.toString();
        }
        const tdMovieBack = document.getElementById("movie_back");
        const selectedMovie = movieLista.find(movie => movie.id === 447365);
        tdMovieBack.textContent = selectedMovie.backdrop_path;
        const tdMovieId = document.querySelector(`#movie_id`);
        const movieId = movie.id.toString();
        tdMovieId.textContent = movieId;
        const tdMovieLan = document.querySelector(`#movie_language`);
        const movieLan = movie.original_language;
        tdMovieLan.textContent = movieLan;
        const tdMovieOriginalTitle = document.querySelector(`#movie_original_title`);
        const movieOriginalTitle = movie.original_title;
        tdMovieOriginalTitle.textContent = movieOriginalTitle;
        const tdMovieOverview = document.querySelector(`#movie_overview`);
        const movieOverview = movie.overview;
        tdMovieOverview.textContent = movieOverview;
        const tdMoviePopularity = document.querySelector(`#movie_popularity`);
        const moviePopularity = movie.popularity.toString();
        tdMoviePopularity.textContent = moviePopularity;
        const tdMoviePoster = document.getElementById("movie_poster");
        const moviePoster = movieLista.find(movie => movie.id === 447365);
        tdMoviePoster.textContent = moviePoster.poster_path;
        const tdMovieDate = document.querySelector(`#movie_date`);
        const movieDate = movie.release_date.toLocaleDateString();
        tdMovieDate.textContent = movieDate;
        const tdMovieTitle = document.querySelector(`#movie_title`);
        const movieTitle = movie.title;
        tdMovieTitle.textContent = movieTitle;
        const tdMovieVideo = document.querySelector('#movie_video');
        for (const movie of movieLista) {
            const movieVideo = movie.video;
            tdMovieVideo.innerHTML = movieVideo.toString();
        }
        const tdMovieAverage = document.querySelector(`#movie_average`);
        const movieAverage = movie.vote_average.toString();
        tdMovieAverage.textContent = movieAverage;
        const tdMovieCount = document.querySelector(`#movie_count`);
        const movieCount = movie.vote_count.toString();
        tdMovieCount.textContent = movieCount;
    });
}
window.addEventListener('DOMContentLoaded', exibirMovie);
