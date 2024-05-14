
  document.addEventListener('DOMContentLoaded', function() {
  const div = document.createElement("div");
  div.className ="box";
  div.innerHTML = `
  <h1>
 <div class="content">
   <h2 class="title">Buscador de Unplash</h2>
   <div class="slideshow-container" id="slideshow-container">
       <img  src="https://i.pinimg.com/564x/09/7e/29/097e29f2e44082251792002f6b190020.jpg">
       <img src="https://i.pinimg.com/564x/dd/82/49/dd82494279d2424fdf3c0f263b94fc95.jpg">
       <img  src="https://i.pinimg.com/564x/b7/c9/8f/b7c98fee6cd8a9ee921b35dd47023a60.jpg">
       <img  src="https://i.pinimg.com/564x/4b/1c/1e/4b1c1e49b71821eb85871164b018023f.jpg">
       <img  src="https://i.pinimg.com/564x/5a/16/9d/5a169db84e334cebfa35cd0a7c1be97c.jpg">
       <img  src="https://i.pinimg.com/564x/b5/49/6b/b5496bc2365862ef69e2371fb88dd4a4.jpg">
   </div>
   <h3 class="subtitle">Búsqueda rápida para inspirar tu día!</h3>
   <h3 class="author">By Cynthia Perez</h3>
 </div>
</h1>  

  `;
  
  document.body.appendChild(div); 

  const images = document.querySelectorAll('.slideshow-container img');
  let index = 0;

  function showImage(n) {
    images.forEach(img => img.classList.remove('active'));
    images[n].classList.add('active');
  }

  function nextImage() {
    index = (index + 1) % images.length;
    showImage(index);
  }

  showImage(index);

  // Crossfade
  setInterval(nextImage, 3000); 

});



