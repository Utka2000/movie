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
              <div class='movie' data-id=item.id>
              <img src=https://image.tmdb.org/t/p/w500/${item.poster_path} />
              <small>2018 - Horror/Thriller</small>
              <h4>${item.title}</h4>
              <span>${item.vote_average}</span>
              </div>
            `;
    row.innerHTML = rowContent;
    movie.append(row);
  });
}
fetchData();

const searchFun = () => {
  let filter = document.getElementById("movieId").value;
  let myTable = document.getElementsByTagName("tr");
  for (var i = 0; i < myTable.length; i++) {
    let td = myTable[i].getElementsByTagName("td")[0];
    if (td) {
      let textvalue = td.textContent || td.innerHTML;
      if (textvalue.toUpperCase().indexOf(filter) > -1) {
        myTable[i].style.display = "";
      } else {
        myTable[i].style.display = "none";
      }
    }
  }
};
