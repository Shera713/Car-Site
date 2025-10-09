//http://www.omdbapi.com/?i=tt3896198&apikey=a32eca9f

async function main() {
    const movies = await fetch ("http://www.omdbapi.com/?i=tt3896198&apikey=a32eca9f");
    const moviesData = await movies.json();
    const movieListEl = document.querySelector('.movie-list');
    

    movieListEl.innerHTML = moviesData.map((movie) => movieHTML(movie)).join("");

    
}

main();

function showMoviePosts(id){
    localStorage.setItem("id", id)
    window.location.href =`${window.location.origin}/index.html#movies` 
}


function movieHTML(movie){
return `<div class="movie-card onclick=showMoviePosts(${movie.id})">
    <div class="movie-card__container">
<h3>${movie.title}</h3>
<p><b>year:</b>${movie.year}</p>
<p><b>imbdID:</b>${movie.imbdID}</p>
<p><b>movie poster</b> <a href="https://${movie.poster}" target="_blank">
${movie.poster}
</a></p>
</div>
</div>`;
}