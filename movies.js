const movieListEl = document.querySelector('.movie-list');
     const id = localStorage.getItem("id");

async function onSearchChange(event){
    const id = event.target.value;
renderMovies(id)
}

 async function renderMovies(id) {
    const movies = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${id}`);
 const moviesData = await movies.json();

movieListEl.innerHTML = moviesData.map(movie => moviesHTML(movie)).join('');
    
 }

 function moviesHTML(movie){
   return `  
     <div class="movie">
      <div class="movie__title">
        ${movie.title}
      </div>
      <p class="movie__body">
        ${movie.body}
      </p>
    </div>
    ` 
 }

 renderMovies(id);