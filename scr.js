const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NjMyZGMyZTE4MTVhMjg2MDZkM2RmZGNkZjY3YTZlMSIsInN1YiI6IjY0NzYyNTM5YzI4MjNhMDBjNDIxZDc0ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.z7UtH9fOQ7rjL2IGda3V5xJ-oFgswqRjKbqIJzhfizQ'
  }
};
// const movieContainer = document.getElementById("movieContainer")
fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
  .then(response => response.json())
  .then(data => {
    // console.log(data) --> object
    const movies = data["results"];
    const movie_container = document.getElementById("movieContainer")
    movies.forEach(({id,title,overview,poster_path,vote_average}) => {
    movie_container.innerHTML += `<div class="movie-card" id="${id}" onclick="alert('movie_id: ${id}')">
                      <img src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="${title}"/>
                      <h5 class="movie-title">${title}</h5>
                      <p class="movie-overview">${overview}</p>
                      <p class="movie-vote">Rating: ${vote_average}</p>
                    </div>`;
    })
  })
  .catch(err => console.error(err));








//검색 기능(1) --> 실패

// const search = (event) => {
//   event.preventDefault();

//   const connectButton = document.querySelector('#search-btn')
//   let input = document.getElementById("search-input").toUpperCase();
//   let item = document.getElementsByClassName("movie-card");

//   for(i = 0; i < item.length; i++) {
//     let title = item[i].getElementsByClassName("movie-title");
//     if(title[0].innerHTML.toUpperCase().indexOf(input) > -1) {
//       item[i].style.display = "flex";
//     } else {
//       item[i].style.display = "none";
//     }
//     }
//   }

// connectButton.addEventListenr('click', search)