const movie = document.getElementById("movieResult");
async function fetchData() {
  const url =
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOTFmZmI0MzUwMzE3ZDQ5NTQwNzQ4NWRjNmM2OTJlYiIsInN1YiI6IjY0ODg0NzdkZTM3NWMwMDBjNTI5ODZkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w2gIIZLE3PmHMjToI1OEVHK6XZdg7A5KNBaYenBRroI`,
    },
  });
  const data = await response.json();
  console.log(data);
  data.results.map((item) => {
    const row = document.createElement("div");
    const rowContent = `
              <div class="movie-list" id="movie-list">
              <div class='movie'  data-id=item.id>
              <img src=https://image.tmdb.org/t/p/w500/${item.poster_path} />
              <small>${item.release_date}- Horror/Thriller</small>
              <h4>${item.title}</h4>
              <span>${item.vote_average}</span>
              </div>
              </div>
            `;
    row.innerHTML = rowContent;
    movie.append(row);
  });
}
fetchData();

const search = () => {
  const searchbox=document.getElementById("search-item").value.toUpperCase();
  const storeitems=document.getElementById("movie-list")
  const movie=document.querySelectorAll(".movie")
  const pname=storeitems.getElementsByTagName("h4")
  for (var i=0;i<pname.length;i++)
  {
  let match=movie[i].getElementsByTagName("h4")[0]
  if (match){
    let textvalue= match.textContent||match.innerHTML
    if (textvalue.toUpperCase().indexOf(searchbox)>-1){
      movie[i].style.display="";
    }else{
      movie[i].style.display="none";
    }
  }
  }
};
