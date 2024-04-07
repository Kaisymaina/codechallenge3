//displaying the 
function displayMovieDetails (){
    
    fetch('http://localhost:3000/films/1')
    
    .then(function(response) {
    
        return response.json();
      })
      
      .then(function(movie) {
       
        displayMovieDetails(movie);
      })
     
      .catch(function(error) {
       
        console.error();
      });
    }
   
    document.addEventListener('DOMContentLoaded',displayMovieDetails())
    
    const poster = document.getElementById('poster');
    poster.src="https://www.gstatic.com/tv/thumb/v22vodart/2157/p2157_v_v8_ab.jpg";
    const title =document.getElementById('title')
    title.textContent="The Giant Gila Monster"
    const runtime=document.getElementById('runtime')
    runtime.textContent="Runtime: 108 minutes"
    const showtime= document.getElementById('showtime');
    showtime.textContent= "Showtime: 04:00PM";
    const tickets = document.getElementById('ticket-num');
    const ticketsRemaining = movie.capacity - movie.tickets_sold;
    tickets.textContent = AvailableTickets;`${ticketsRemaining}/${movie.capacity}`;


//getting the list of the movies available

const baseURL = `http://localhost:3000/films`

fetch(baseURL, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }

}).then((res) => res.json())

  .then((data) => {

    const movieTitles = document.getElementById('films')


    data.forEach((title) => {
        const paragraph = document.createElement('li')

        paragraph.classList.add("film", "item")

        paragraph.addEventListener("click", async () => {
            currentFilmId = title.id;
            const selectedFilm = await fetchFilmById(currentFilmId);
            updateFilmDetails(selectedFilm);
        });



        paragraph.innerText = title.title

        movieTitles.append(paragraph)}) 
        
    })

    const fetchFilmById = async(id) => {

        const response = await 

        fetch(`${baseURL}/${id}`);

        const filmData = await response.json();

        return filmData;
    }

    const updateFilmDetails = (selectedFilm) => {
        console.log(selectedFilm.poster);

        const posters = document.getElementById('poster')

        posters.src = selectedFilm.poster

        const movieTitles = document.getElementById('title')}

        //bringing about functionality to the buy ticket button

const extraContentDiv = document.querySelector('.extra.content');

const buyTicketButton = document.querySelector('#buy-ticket');

console.log(extraContentDiv.innerHTML);

console.log(buyTicketButton.innerHTML);

buyTicketButton.addEventListener('click', () => {

  console.log('Button clicked!');

});
