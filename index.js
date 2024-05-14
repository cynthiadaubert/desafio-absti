function searchImages () {

 const searchQuery = document.querySelector('.search').value;
  const container = document.getElementById('slideshow-container');
  const accessKey = "lRVClXDY3Tw0OWcqSGs3hQy4yNjM3xScqzIJx2_eCIc"
  
  // Saco el container solamente si está
 if (container) {
   container.parentNode.removeChild(container);
 }

  fetch(`https://api.unsplash.com/search/photos?query=${searchQuery}&client_id=${accessKey}&per_page=30`)
      .then(response => response.json())
      .then(data => {
       // console.log("soy data",data.results)
      const existingBox = document.querySelector(".box-container")
       if(existingBox){
        existingBox.parentNode.removeChild(existingBox)
       }

          const newContainer = document.createElement('div');
          newContainer.classList.add('box-container')

          data.results.forEach(item => {
           // console.log("links",item.urls.small)
              const img = document.createElement('img');
              img.classList.add('board-images');
              img.src = item.urls.small;
              newContainer.appendChild(img); 
          });

         // Le pongo el nuevo container después del header y título
          const header = document.querySelector('.title');
          header.parentNode.insertBefore(newContainer, header.nextSibling); 
      })
      .catch(error => {
          console.error('Error fetching data from API:', error);
      }); 
};


document.addEventListener("DOMContentLoaded", function() {
  const searchButton = document.querySelector('.buscar');
  const searchInput = document.querySelector('.search');

  searchButton.addEventListener('click', function() {
    searchImages();
  });
 
  searchInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        searchImages();
    } 
}); 

});


